import React, { useState } from 'react';
import video from './assets/Download.mp4';

const slidesData = [
  {
    id: 0,
    type: 'theory',
    title: 'Hệ Thống Bôi Trơn Động Cơ 🛢️⚙️',
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-6 mt-4 animate-fade-in-up">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-6 rounded-full w-32 h-32 flex items-center justify-center text-6xl shadow-xl hover:scale-110 transition-transform cursor-default">
          🚀
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Chào mừng bạn đến với bài học hôm nay!
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
          Hôm nay chúng ta sẽ cùng nhau khám phá "dòng máu" nuôi dưỡng máy móc, bí quyết giúp các cỗ máy khổng lồ hay những chiếc xe quen thuộc hoạt động mượt mà và bền bỉ.
        </p>
        <div className="inline-block mt-4 px-6 py-3 bg-blue-50 text-blue-700 font-semibold rounded-full border border-blue-200 shadow-sm animate-pulse">
          Sẵn sàng chưa? Bấm "Tiếp tục" ở góc dưới nhé! 👇
        </div>
      </div>
    ),
  },
  {
    id: 1,
    type: 'theory',
    title: 'Khái niệm hệ thống bôi trơn 🛢️',
    content: (
      <div className="text-gray-700 text-lg md:text-xl leading-relaxed">
        <p className="mb-4">
          Hệ thống bôi trơn là một bộ phận cấu thành của động cơ (đặc biệt là động cơ đốt trong) và các máy móc có chi tiết chuyển động.
        </p>
        <div className="bg-yellow-100 p-6 rounded-2xl border-2 border-yellow-300 shadow-sm">
          <p className="font-bold text-yellow-800">🎯 Chức năng chính:</p>
          <p>Vận chuyển, phân phối dầu bôi trơn đến tất cả các bề mặt ma sát để đảm bảo hoạt động trơn tru, ổn định trong suốt quá trình vận hành.</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    type: 'theory',
    title: 'Nhiệm vụ & Công dụng 🛠️',
    content: (
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-xl border-l-4 border-blue-500">
          <p className="font-bold text-blue-800">🌟 Nhiệm vụ cốt lõi:</p>
          <p className="text-gray-700">Đưa dầu bôi trơn đến các bề mặt làm việc của chi tiết, đảm bảo điều kiện hoạt động bình thường và tăng tuổi thọ động cơ.</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          <li className="bg-white p-3 rounded-xl shadow-sm flex items-start gap-2">
            <span className="text-2xl">🧊</span>
            <div><strong>Giảm ma sát:</strong> Ngăn tiếp xúc trực tiếp giữa các bề mặt kim loại.</div>
          </li>
          <li className="bg-white p-3 rounded-xl shadow-sm flex items-start gap-2">
            <span className="text-2xl">❄️</span>
            <div><strong>Làm mát:</strong> Thu nhiệt do ma sát và khí cháy, tránh quá nóng.</div>
          </li>
          <li className="bg-white p-3 rounded-xl shadow-sm flex items-start gap-2">
            <span className="text-2xl">🧹</span>
            <div><strong>Làm sạch:</strong> Cuốn trôi bụi bẩn, mạt kim loại do mài mòn.</div>
          </li>
          <li className="bg-white p-3 rounded-xl shadow-sm flex items-start gap-2">
            <span className="text-2xl">🔒</span>
            <div><strong>Làm kín khe hở:</strong> Giữ áp suất buồng cháy, tăng hiệu suất.</div>
          </li>
          <li className="bg-white p-3 rounded-xl shadow-sm flex items-start gap-2 md:col-span-2">
            <span className="text-2xl">🛡️</span>
            <div><strong>Bảo vệ chi tiết:</strong> Ngăn chặn ăn mòn, han gỉ do độ ẩm và khí cháy.</div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    type: 'theory',
    title: 'Phân loại phương pháp bôi trơn 📊',
    content: (
      <div className="flex flex-col gap-4 text-gray-700">
        <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
          <h3 className="font-bold text-green-700 text-lg mb-1">1. Bôi trơn bằng vung té 💦</h3>
          <p>Sử dụng lực va đập của chi tiết chuyển động (như đầu to thanh truyền) văng dầu lên bề mặt. Thường dùng trên xe máy nhỏ.</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200">
          <h3 className="font-bold text-purple-700 text-lg mb-1">2. Bôi trơn cưỡng bức 🚀</h3>
          <p className="mb-2">Dùng bơm tạo áp suất đẩy dầu liên tục. Phổ biến trên ô tô, máy móc hiện đại.</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Bể dầu ướt:</strong> Dầu chứa trực tiếp dưới cacte, dễ bị ảnh hưởng bởi nhiệt.</li>
            <li><strong>Bể dầu khô:</strong> Thùng chứa riêng, phù hợp vận hành khắc nghiệt (xe tăng, tàu thủy).</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
          <h3 className="font-bold text-orange-700 text-lg mb-1">3. Pha dầu vào nhiên liệu ⛽</h3>
          <p>Dầu trộn lẫn nhiên liệu trước khi vào buồng cháy. Dùng cho động cơ cũ/nhỏ không có hệ thống riêng.</p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    type: 'theory',
    title: 'Nguyên lý hoạt động 🔄',
    content: (
      <div>
        <p className="text-gray-700 mb-4 italic">Hoạt động theo chu trình tuần hoàn khép kín với 5 bước:</p>
        <div className="flex flex-col gap-3">
          {['Hút dầu từ cacte', 'Lọc dầu (thô & tinh)', 'Phân phối đến các chi tiết', 'Làm mát qua két', 'Quay trở lại bể chứa'].map((step, index) => (
            <div key={index} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 flex-shrink-0 bg-pink-400 text-white font-bold rounded-full flex items-center justify-center text-xl">
                {index + 1}
              </div>
              <p className="font-medium text-gray-800 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    type: 'theory',
    title: 'Trực quan hóa hoạt động 🎥',
    content: (
      <div className="flex flex-col items-center justify-center w-full animate-fade-in-up">
        <p className="text-gray-700 mb-6 text-lg text-center font-medium bg-white/60 px-6 py-2 rounded-full shadow-sm">
          Hãy cùng xem dòng chảy của dầu nhớt bảo vệ động cơ trước khi làm bài nhé! 👇
        </p>
        {/* Khung chứa Video */}
        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-black">
          <video 
            className="w-full h-full object-cover"
            controls       // Hiển thị thanh điều khiển (Play, Pause, Âm lượng...)
            autoPlay       // Tự động phát khi trượt tới
            muted          // Bắt buộc phải có 'muted' thì trình duyệt mới cho phép autoPlay
            loop           // Tự động lặp lại khi hết video
          >
            <source src={video} type="video/mp4" />
            <p className="text-white text-center mt-10">Trình duyệt của bạn không hỗ trợ xem video.</p>
          </video>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    type: 'quiz',
    question: 'Câu 1: Hệ thống bôi trơn dùng để làm gì?',
    options: ['A. Tăng ma sát', 'B. Giảm ma sát và mài mòn', 'C. Đốt cháy nhiên liệu', 'D. Làm động cơ quay nhanh hơn'],
    answer: 1, // Index của đáp án B
  },
  {
    id: 7,
    type: 'quiz',
    question: 'Câu 2: Dầu bôi trơn trong động cơ thường được chứa ở đâu?',
    options: ['A. Bình xăng', 'B. Xi lanh', 'C. Cácte', 'D. Bugi'],
    answer: 2, // Index của đáp án C
  },
  {
    id: 8,
    type: 'quiz',
    question: 'Câu 3: Loại bôi trơn nào sử dụng bơm dầu để đưa dầu đến các chi tiết?',
    options: ['A. Bôi trơn vung té', 'B. Bôi trơn cưỡng bức', 'C. Bôi trơn tự nhiên', 'D. Bôi trơn khô'],
    answer: 1, // Index của đáp án B
  },
  {
    id: 9,
    type: 'quiz',
    question: 'Câu 4: Một trong những nhiệm vụ của hệ thống bôi trơn là gì?',
    options: ['A. Tạo tia lửa điện', 'B. Làm sạch các chi tiết', 'C. Cung cấp nhiên liệu', 'D. Khởi động động cơ'],
    answer: 1, // Index của đáp án B
  },
  {
    id: 10,
    type: 'quiz',
    question: 'Câu 5: Trong hệ thống bôi trơn, dầu sau khi bôi trơn sẽ đi đâu?',
    options: ['A. Bị đốt cháy', 'B. Bay hơi hết', 'C. Quay về cácte', 'D. Đi vào bình xăng'],
    answer: 2, // Index của đáp án C
  },
  {
    id: 11, 
    type: 'theory',
    title: 'Cảm ơn bạn đã lắng nghe! 💖',
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-6 mt-4 animate-fade-in-up">
        <div className="text-8xl animate-bounce mt-4 cursor-default drop-shadow-lg">
          🏆
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
          Bạn đã hoàn thành xuất sắc bài học!
        </h2>
        <p className="text-gray-700 text-lg max-w-xl bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
          Hy vọng qua phần trình bày này, bạn đã nắm vững kiến thức về hệ thống bôi trơn. 
          <br/><br/>
          <strong>💡 Lời khuyên:</strong> Đừng quên bảo dưỡng và thay dầu nhớt định kỳ cho chiếc xe của mình để động cơ luôn khỏe mạnh nhé! 🏍️🚗
        </p>
        <div className="w-full max-w-md h-px bg-gray-200 my-4"></div>
        <p className="text-gray-500 italic font-medium flex items-center gap-2">
          <span>Phần Q&A: Mọi người có câu hỏi nào không ạ?</span>
          <span className="text-2xl">🙋‍♂️🙋‍♀️</span>
        </p>
      </div>
    ),
  },
];

export default function FunLubricationPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const slide = slidesData[currentSlide];

  const handleNext = () => {
    if (currentSlide < slidesData.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleSelectAnswer = (optionIndex) => {
    if (quizAnswers[currentSlide] !== undefined) return; // Đã trả lời thì không cho chọn lại
    setQuizAnswers({ ...quizAnswers, [currentSlide]: optionIndex });
  };
  
  const handleResetAnswer = () => {
    // Tạo một bản sao của danh sách đáp án hiện tại
    const newAnswers = { ...quizAnswers };
    // Xóa đáp án của câu hỏi hiện tại
    delete newAnswers[currentSlide];
    // Cập nhật lại state
    setQuizAnswers(newAnswers);
  };

  // Tính tiến độ
  const progress = ((currentSlide + 1) / slidesData.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-pink-100 to-yellow-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white/80 backdrop-blur-lg w-full max-w-5xl h-[820px] flex flex-col rounded-[2rem] shadow-2xl overflow-hidden border border-white">        
        {/* Header / Progress bar */}
        <div className="h-3 w-full bg-gray-200 flex-shrink-0">
          <div 
            className="h-full bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8 md:p-12 flex-1 flex flex-col min-h-0">
          
          {/* Header Slide */}
          <div className="mb-6 text-center flex-shrink-0">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-500 text-sm font-bold tracking-wider mb-3">
              SLIDE {currentSlide + 1} / {slidesData.length}
            </span>
            {slide.type === 'theory' ? (
              <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-sm flex items-center justify-center gap-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  {slide.title.substring(0, slide.title.lastIndexOf(' '))}
                </span>
                <span className="text-[1.1em] text-black drop-shadow-none">
                  {slide.title.substring(slide.title.lastIndexOf(' ') + 1)}
                </span>
              </h1>
            ) : (
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Luyện tập xíu nào! 🧠✨
              </h1>
            )}
          </div>

          {/* Slide Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 min-h-0 flex flex-col justify-center">
            {slide.type === 'theory' ? (
              <div className="animate-fade-in-up">
                {slide.content}
              </div>
            ) : (
              <div className="max-w-2xl mx-auto w-full animate-fade-in-up">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                  {slide.question}
                </h2>
                <div className="grid gap-3">
                  {slide.options.map((option, idx) => {
                    const isSelected = quizAnswers[currentSlide] === idx;
                    const isCorrect = slide.answer === idx;
                    const isAnswered = quizAnswers[currentSlide] !== undefined;
                    
                    let btnClass = "p-4 text-left rounded-2xl border-2 font-medium transition-all duration-300 text-lg ";
                    
                    if (!isAnswered) {
                      btnClass += "bg-white border-gray-200 text-gray-600 hover:border-pink-400 hover:bg-pink-50 hover:-translate-y-1 hover:shadow-md cursor-pointer";
                    } else if (isCorrect) {
                      btnClass += "bg-green-100 border-green-500 text-green-800 shadow-inner";
                    } else if (isSelected && !isCorrect) {
                      btnClass += "bg-red-100 border-red-500 text-red-800";
                    } else {
                      btnClass += "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(idx)}
                        disabled={isAnswered}
                        className={btnClass}
                      >
                        <div className="flex justify-between items-center">
                          <span>{option}</span>
                          {isAnswered && isCorrect && <span className="text-2xl">🎉</span>}
                          {isAnswered && isSelected && !isCorrect && <span className="text-2xl">😢</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {quizAnswers[currentSlide] !== undefined && (
                  <div className="mt-6 flex justify-center animate-fade-in-up">
                    <button
                      onClick={handleResetAnswer}
                      className="px-5 py-2 bg-white border-2 border-gray-200 text-gray-600 rounded-full font-bold hover:bg-gray-100 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm active:scale-95"
                    >
                      🔄 Làm lại
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 flex justify-between items-center pt-6 border-t border-gray-100 flex-shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                currentSlide === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-sm'
              }`}
            >
              ⬅️ Quay lại
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentSlide === slidesData.length - 1}
              className={`px-8 py-3 rounded-xl font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
                currentSlide === slidesData.length - 1
                  ? 'bg-gray-300 cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600'
              }`}
            >
              {currentSlide === slidesData.length - 1 ? 'Hoàn thành 🏁' : 'Tiếp tục ➡️'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}