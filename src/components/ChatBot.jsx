import { useState, useRef, useEffect } from 'react';

import { X, Send, Loader2 } from 'lucide-react';

import { donationSchedule, organizations, feedingAmericaSchedule, muskegonPantries, ottawaPantries, rrfmInfo } from '../data';



export default function ChatBot({ isOpen, onClose }) {

  const [messages, setMessages] = useState([

    {

      role: 'assistant',

      content: "Hi! I'm here to help you find food resources, donation opportunities, and community support in the Muskegon area. You can ask me questions like:\n\n• Where can I drop off food donations?\n• What pantries are open today?\n• I need help finding food in Whitehall\n• When is the next Really Really Free Market?"

    }

  ]);

  const [input, setInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);



  const scrollToBottom = () => {

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  };



  useEffect(() => {

    scrollToBottom();

  }, [messages]);



  const createContextPrompt = (userMessage) => {

    const context = `You are a helpful assistant for the FeedING The Lakeshore app. You help people find food pantries, donation locations, and community resources in Muskegon, Michigan.



Current date: November 2, 2025



Available data:



DONATION SCHEDULE (sorted by date):

${JSON.stringify(donationSchedule, null, 2)}



ORGANIZATIONS:

${JSON.stringify(organizations, null, 2)}



FEEDING AMERICA MOBILE PANTRIES - MUSKEGON COUNTY:

${JSON.stringify(feedingAmericaSchedule.muskegon, null, 2)}



FEEDING AMERICA MOBILE PANTRIES - OTTAWA COUNTY:

${JSON.stringify(feedingAmericaSchedule.ottawa, null, 2)}



MUSKEGON COUNTY FOOD PANTRIES:

${JSON.stringify(muskegonPantries, null, 2)}



OTTAWA COUNTY FOOD PANTRIES:

${JSON.stringify(ottawaPantries, null, 2)}



REALLY REALLY FREE MARKET INFO:

${JSON.stringify(rrfmInfo, null, 2)}



User question: ${userMessage}



Please provide helpful, specific information based on this data. If the user asks about locations, times, or needs, refer to the specific data above. Always be compassionate and helpful. If information isn't available in the data, say so and suggest alternatives.`;



    return context;

  };



  const handleSend = async () => {

    if (!input.trim() || isLoading) return;



    const userMessage = input.trim();

    setInput('');

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    setIsLoading(true);



    try {

      const response = await fetch('/api/chat', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify({

          model: 'claude-sonnet-4-20250514',

          max_tokens: 1024,

          messages: [

            ...messages.map(msg => ({

              role: msg.role === 'assistant' ? 'assistant' : 'user',

              content: typeof msg.content === 'string' ? msg.content : msg.content

            })),

            {

              role: 'user',

              content: createContextPrompt(userMessage)

            }

          ]

        })

      });



      if (!response.ok) {

        const errorData = await response.json().catch(() => ({}));

        console.error('API Error:', response.status, errorData);

        throw new Error(errorData.error || errorData.error?.message || `API request failed: ${response.status}`);

      }



      const data = await response.json();

      const assistantMessage = data.content[0]?.text || data.content[0]?.type === 'text' ? data.content[0].text : 'I received your message but had trouble processing it.';



      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);

    } catch (error) {

      console.error('Chat error:', error);

      let errorMessage = "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";

      if (error.message.includes('API key')) {

        errorMessage = "The chat assistant is not configured. Please contact the administrator.";

      } else if (error.message) {

        errorMessage = `Error: ${error.message}`;

      }

      setMessages(prev => [...prev, {

        role: 'assistant',

        content: errorMessage

      }]);

    } finally {

      setIsLoading(false);

    }

  };



  const handleKeyPress = (e) => {

    if (e.key === 'Enter' && !e.shiftKey) {

      e.preventDefault();

      handleSend();

    }

  };



  if (!isOpen) return null;



  return (

    <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col">

      {/* Header */}

      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 flex items-center justify-between">

        <h2 className="text-lg font-semibold">Community Assistant</h2>

        <button

          onClick={onClose}

          className="p-2 hover:bg-teal-500 rounded-full transition-colors"

          aria-label="Close chat"

        >

          <X className="h-5 w-5" />

        </button>

      </div>



      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.map((message, index) => (

          <div

            key={index}

            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}

          >

            <div

              className={`max-w-[80%] rounded-lg px-4 py-2 ${

                message.role === 'user'

                  ? 'bg-teal-600 text-white'

                  : 'bg-gray-100 text-gray-800'

              }`}

            >

              <p className="text-sm whitespace-pre-wrap">{message.content}</p>

            </div>

          </div>

        ))}

        {isLoading && (

          <div className="flex justify-start">

            <div className="bg-gray-100 rounded-lg px-4 py-2">

              <Loader2 className="h-5 w-5 animate-spin text-teal-600" />

            </div>

          </div>

        )}

        <div ref={messagesEndRef} />

      </div>



      {/* Input */}

      <div className="border-t border-gray-200 p-4">

        <div className="flex space-x-2">

          <input

            type="text"

            value={input}

            onChange={(e) => setInput(e.target.value)}

            onKeyPress={handleKeyPress}

            placeholder="Ask me anything..."

            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"

            disabled={isLoading}

          />

          <button

            onClick={handleSend}

            disabled={isLoading || !input.trim()}

            className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"

            aria-label="Send message"

          >

            <Send className="h-5 w-5" />

          </button>

        </div>

      </div>

    </div>

  );

}

