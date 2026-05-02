import React from 'react';

export default function NotesCover() {
  return (
    <div className="w-full h-full bg-[#F9F9FA] flex flex-col p-2 text-[#161924] font-sans overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E8E8E9] pb-2 mb-2">
        <h2 className="text-sm font-semibold">Notes</h2>
        <div className="flex gap-1">
          <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300 bg-white">
            <span className="block w-2.5 h-0.5 bg-gray-500"></span>
          </div>
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white">O</div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex text-[10px] gap-2 border-b border-gray-200 mb-2">
        <div className="text-blue-500 border-b-2 border-blue-500 pb-1 font-semibold">All Notes 12</div>
        <div className="text-gray-400 pb-1">Drafts 6</div>
      </div>

      {/* Grid of Note Cards */}
      <div className="grid grid-cols-2 gap-2 flex-grow overflow-hidden relative">
        <div className="bg-white border border-gray-200 rounded p-2 flex flex-col">
          <div className="text-[10px] bg-blue-100 text-blue-800 w-fit px-1 rounded mb-1">document</div>
          <h3 className="text-xs font-semibold mb-1 truncate">lecture-notes.pdf</h3>
          <p className="text-[8px] text-gray-500 line-clamp-2 mb-1">Captures important updates, decisions, and action items...</p>
          <div className="text-[8px] text-gray-400 mt-auto flex justify-between">
            <span>Oct 9, 2026</span>
            <span className="flex gap-1"><span>🔗 2</span> <span>🖼 5</span></span>
          </div>
        </div>

        <div className="bg-white border border-blue-500 border-dashed rounded p-2 flex flex-col items-center justify-center text-blue-500">
          <span className="text-lg font-light mb-1">+</span>
          <span className="text-[10px] font-medium">Add Note</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded p-2 flex flex-col opacity-50">
          <div className="text-[10px] bg-blue-100 text-blue-800 w-fit px-1 rounded mb-1">document</div>
          <h3 className="text-xs font-semibold mb-1 truncate">meeting-sync.pdf</h3>
          <p className="text-[8px] text-gray-500 line-clamp-2 mb-1">Team alignment on the new features...</p>
          <div className="text-[8px] text-gray-400 mt-auto flex justify-between">
            <span>Oct 10, 2026</span>
            <span className="flex gap-1"><span>🔗 1</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
