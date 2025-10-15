"use client";

import React, { useState } from "react";
import { 
  Search,
  Send,
  Inbox,
  Star,
  Trash2,
  Reply,
  Forward,
  Paperclip,
  X,
  ChevronLeft,
  Filter,
  MoreVertical
} from "lucide-react";

interface Message {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  content: string;
  date: string;
  time: string;
  read: boolean;
  starred: boolean;
  type: "inbox" | "sent";
  avatar: string;
}

const mockMessages: Message[] = [
  {
    id: 1,
    sender: "Pani Maria Nowak",
    subject: "Zebranie rodzicielskie - 20.10.2025",
    preview: "Dzień dobry! Zapraszam na zebranie rodzicielskie, które odbędzie się...",
    content: "Dzień dobry! Zapraszam na zebranie rodzicielskie, które odbędzie się 20 października 2025 o godzinie 17:00 w sali nr 3. Omówimy plan wycieczki oraz sprawy organizacyjne związane z jesiennym festiwalem. Prosimy o potwierdzenie obecności.",
    date: "2025-10-14",
    time: "10:30",
    read: false,
    starred: true,
    type: "inbox",
    avatar: "MN"
  },
  {
    id: 2,
    sender: "Pani Agnieszka Wiśniewska",
    subject: "Jadłospis na następny tydzień",
    preview: "Szanowni Rodzice, informujemy że w przyszłym tygodniu będzie obowiązywał...",
    content: "Szanowni Rodzice, informujemy że w przyszłym tygodniu będzie obowiązywał jadłospis jesienny z uwzględnieniem lokalnych produktów sezonowych. Prosimy o zgłaszanie ewentualnych alergii pokarmowych dziecka.",
    date: "2025-10-13",
    time: "14:15",
    read: true,
    starred: false,
    type: "inbox",
    avatar: "AW"
  },
  {
    id: 3,
    sender: "Dyrekcja Przedszkola",
    subject: "Zmiany w harmonogramie zajęć dodatkowych",
    preview: "Uprzejmie informujemy o zmianach w harmonogramie zajęć dodatkowych...",
    content: "Uprzejmie informujemy o zmianach w harmonogramie zajęć dodatkowych. Od następnego tygodnia zajęcia z języka angielskiego będą odbywać się we wtorki i czwartki od godziny 10:00. Zajęcia taneczne pozostają bez zmian.",
    date: "2025-10-12",
    time: "09:00",
    read: true,
    starred: false,
    type: "inbox",
    avatar: "DP"
  },
  {
    id: 4,
    sender: "Pani Katarzyna Lewandowska",
    subject: "Dzień Chłopca - 30 września",
    preview: "W dniu 30 września obchodzimy Dzień Chłopca...",
    content: "W dniu 30 września obchodzimy Dzień Chłopca. Zapraszamy wszystkich chłopców w ich ulubionych strojach superbohaterów. Przygotowaliśmy wiele atrakcji i konkursów z nagrodami.",
    date: "2025-10-11",
    time: "16:20",
    read: true,
    starred: false,
    type: "inbox",
    avatar: "KL"
  },
  {
    id: 5,
    sender: "Ja",
    subject: "RE: Potwierdzenie obecności na zebraniu",
    preview: "Dziękuję za zaproszenie. Potwierdzam swoją obecność na zebraniu...",
    content: "Dziękuję za zaproszenie. Potwierdzam swoją obecność na zebraniu rodzicielskim 20 października. Z poważaniem, Anna Kowalska",
    date: "2025-10-14",
    time: "11:00",
    read: true,
    starred: false,
    type: "sent",
    avatar: "JA"
  },
];

export default function WiadomosciPage() {
  const [activeTab, setActiveTab] = useState<"inbox" | "sent">("inbox");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isComposing, setIsComposing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState({
    recipient: "",
    subject: "",
    content: ""
  });

  const filteredMessages = messages
    .filter(msg => msg.type === activeTab)
    .filter(msg => 
      msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const unreadCount = messages.filter(msg => !msg.read && msg.type === "inbox").length;

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setIsComposing(false);
    if (!message.read && message.type === "inbox") {
      setMessages(messages.map(m => 
        m.id === message.id ? { ...m, read: true } : m
      ));
    }
  };

  const handleStarToggle = (messageId: number) => {
    setMessages(messages.map(m => 
      m.id === messageId ? { ...m, starred: !m.starred } : m
    ));
  };

  const handleSendMessage = () => {
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "Ja",
      subject: newMessage.subject,
      preview: newMessage.content.substring(0, 50) + "...",
      content: newMessage.content,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
      read: true,
      starred: false,
      type: "sent",
      avatar: "JA"
    };
    
    setMessages([newMsg, ...messages]);
    setNewMessage({ recipient: "", subject: "", content: "" });
    setIsComposing(false);
    setActiveTab("sent");
  };

  const handleReply = () => {
    setIsComposing(true);
    setSelectedMessage(null);
    setNewMessage({
      recipient: selectedMessage?.sender || "",
      subject: `RE: ${selectedMessage?.subject || ""}`,
      content: ""
    });
  };

    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wiadomości</h1>
            <p className="text-sm text-gray-500 mt-1">
              Komunikacja z przedszkolem
            </p>
          </div>
          <button
            onClick={() => {
              setIsComposing(true);
              setSelectedMessage(null);
              setNewMessage({ recipient: "", subject: "", content: "" });
            }}
            className="bg-[#608858] text-white px-4 py-2 rounded-lg hover:bg-[#4a6b44] transition-colors flex items-center gap-2 shadow-md"
          >
            <Send className="w-4 h-4" />
            Nowa wiadomość
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Szukaj wiadomości..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#608858] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("inbox")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === "inbox"
                  ? "text-[#608858] bg-green-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Inbox className="w-4 h-4" />
                Odebrane
                {unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
              {activeTab === "inbox" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#608858]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("sent")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === "sent"
                  ? "text-[#608858] bg-green-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Wysłane
              </div>
              {activeTab === "sent" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#608858]" />
              )}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 px-4">
                <Inbox className="w-12 h-12 mb-2" />
                <p className="text-sm text-center">
                  {searchQuery ? "Brak wyników wyszukiwania" : "Brak wiadomości"}
                </p>
              </div>
            ) : (
              filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => handleMessageClick(message)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
                    selectedMessage?.id === message.id ? "bg-green-50" : ""
                  } ${!message.read && message.type === "inbox" ? "bg-blue-50" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#608858] text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {message.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm truncate ${!message.read && message.type === "inbox" ? "font-bold" : "font-medium"}`}>
                          {message.sender}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStarToggle(message.id);
                          }}
                          className="flex-shrink-0 ml-2"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              message.starred
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-400 hover:text-yellow-400"
                            }`}
                          />
                        </button>
                      </div>
                      <p className={`text-sm truncate mb-1 ${!message.read && message.type === "inbox" ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {message.preview}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {message.date} • {message.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-white">
          {isComposing ? (
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Nowa wiadomość</h2>
                <button
                  onClick={() => setIsComposing(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col p-6 overflow-y-auto">
                <div className="space-y-4 max-w-3xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Odbiorca
                    </label>
                    <input
                      type="text"
                      value={newMessage.recipient}
                      onChange={(e) => setNewMessage({ ...newMessage, recipient: e.target.value })}
                      placeholder="Wybierz nauczyciela..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#608858] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Temat
                    </label>
                    <input
                      type="text"
                      value={newMessage.subject}
                      onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                      placeholder="Wpisz temat wiadomości..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#608858] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Treść wiadomości
                    </label>
                    <textarea
                      value={newMessage.content}
                      onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                      placeholder="Wpisz treść wiadomości..."
                      rows={12}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#608858] focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100">
                  <Paperclip className="w-4 h-4" />
                  Załącznik
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsComposing(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Anuluj
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.recipient || !newMessage.subject || !newMessage.content}
                    className="bg-[#608858] text-white px-6 py-2 rounded-lg hover:bg-[#4a6b44] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Wyślij
                  </button>
                </div>
              </div>
            </div>
          ) : selectedMessage ? (
            <div className="flex flex-col h-full">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Powrót
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={handleReply}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    title="Odpowiedz"
                  >
                    <Reply className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="Przekaż">
                    <Forward className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="Usuń">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="Więcej">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedMessage.subject}
                  </h2>
                  
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-[#608858] text-white flex items-center justify-center font-semibold flex-shrink-0">
                      {selectedMessage.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {selectedMessage.sender}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {selectedMessage.date} • {selectedMessage.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Do: {selectedMessage.type === "sent" ? selectedMessage.sender : "Anna Kowalska"}
                      </p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.content}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={handleReply}
                  className="bg-[#608858] text-white px-6 py-2 rounded-lg hover:bg-[#4a6b44] transition-colors flex items-center gap-2"
                >
                  <Reply className="w-4 h-4" />
                  Odpowiedz
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Inbox className="w-20 h-20 mb-4" />
              <p className="text-lg font-medium">Wybierz wiadomość</p>
              <p className="text-sm">Kliknij na wiadomość z listy, aby ją przeczytać</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

