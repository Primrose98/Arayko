import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface PresidentsMessageProps {
  className?: string;
}

export function PresidentsMessage({ className }: PresidentsMessageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const previewText = "A special message from your class president...";

  return (
    <>
      {/* Preview Card */}
      <div 
        className={cn(
          "max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg border-2 border-dashed border-blue-200 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-12 mb-16",
          className
        )}
        onClick={() => setIsOpen(true)}
      >
        <div className="text-center">
          <h3 className="text-2xl font-script text-blue-600 mb-2">A Special Message</h3>
          <p className="text-gray-600 mb-4">From your Class President</p>
          <div className="w-16 h-1 bg-blue-200 mx-auto mb-4"></div>
          <p className="text-gray-700 italic">"{previewText}"</p>
          <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
            Read Full Message →
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-script text-blue-600 mb-2">A Message from Your Class President</h3>
                <div className="w-24 h-1 bg-blue-200 mx-auto"></div>
              </div>
              
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  To Ma'am Larisa,
                </p>
                
                <p className="mb-4">
                  Hello ma'am! Once again, Happy Teachers' Day or Month po ulit sa inyo! As the class president, naalala 'ko pa nung classroom elections, hindi 'ko po talaga inexpect that I would be chosen as the class president at medyo kinabahan po ako sa magiging resulta. Pero I got to know more about the class and you, our dear adviser. There, I knew that I was fortunately brought to a section with a warm and welcoming personality, and you were also there, a still youthful and passionate teacher who was our adviser.
                </p>
                
                <p className="mb-4">
                  Even though in busy times as a teacher, you made sure that you were always there to support us and celebrate us through your "pakains". Naalala 'ko pa how desperate were you to join in our practice sessions nung Sabayang Pagbigkas but you were busy at the faculty, and that me realized how much you cared for you advisory class. Kahit iilang months palang ang dinaan ng Einstein, there were a lot of memories that you helped us built.
                </p>
                
                <p className="mb-4">
                  Today, we wanted to gift you back the kindness and support you gave to us. Enjoy your carrot cake po, buti talaga nakita 'ko yung listahan nyo sa faculty nung isang araw HAHAHAHAHAHAHHA. Also remember po that we're also here for you, to cherish and support you po in any way possible.
                </p>
                
                <div className="space-y-2 italic text-blue-600 my-6">
                  <p>We wish the best in the unfinished story of Einstein,</p>
                  <p>We wish the best for more memories with you po.</p>
                  <p>We wish the best sa inyo po ni Sir ano... (eme HAHAHAHAHAH)</p>
                </div>
                
                <p className="mb-4">
                  Enjoy the day and the gifts maam, LABS KA PO NAMIN MA'AM LARISA! 💙
                </p>
                
                <div className="mt-8 text-right">
                  <p className="font-semibold">Sincerely,</p>
                  <p className="text-blue-600">Biboy</p>
                  <p className="text-sm text-gray-500">Class President, STEM 11 - EINSTEIN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
