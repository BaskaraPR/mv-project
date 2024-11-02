"use client";

import { Link2, MoreVertical, Paperclip, Send, Trash2, X } from "lucide-react";
import { useState } from "react";

interface ModalProp {
  onClose: () => void;
  cp: string;
}

export default function RequestModal({ onClose, cp }: ModalProp) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const clearMessages = () => {
    setSubject("");
    setMessage("");
  };

  console.log(cp);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-2xl w-full mx-4 bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-300 ease-out">
        <div className="flex items-center  justify-between mb-8">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          <button className="ml-auto p-2 text-violet-500 hover:bg-violet-50 rounded-full">
            <Send className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="flex-1 bg-transparent outline-none"
            />
            {email && (
              <button
                onClick={() => setEmail("")}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Company CP</label>
          <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <p className="text-sm text-gray-800">{cp}</p>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Subject</label>
          <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 bg-transparent outline-none"
            />
            {subject && (
              <button
                onClick={() => setSubject("")}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button className="p-1.5 hover:bg-white rounded">
              <i className="font-serif italic">i</i>
            </button>
            <button className="p-1.5 hover:bg-white rounded font-bold">
              B
            </button>
            <button className="p-1.5 hover:bg-white rounded underline">
              U
            </button>
            <button className="p-1.5 hover:bg-white rounded">
              <Link2 className="w-4 h-4" />
            </button>
            <div className="h-5 w-px bg-gray-300 mx-1" />
            <button className="p-1.5 hover:bg-white rounded">≡</button>
            <button className="p-1.5 hover:bg-white rounded">≣</button>
            <button className="p-1.5 hover:bg-white rounded">☰</button>
            <button className="p-1.5 hover:bg-white rounded">≡</button>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            className="w-full h-48 px-3 py-2 bg-gray-50 rounded-lg outline-none resize-none"
          />
        </div>

        <div className="flex items-center pt-4">
          <div className="flex gap-2">
            <button
              onClick={clearMessages}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full"
              aria-label="Clear messages"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Paperclip className="w-5 h-5" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Link2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <button className="ml-auto px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
