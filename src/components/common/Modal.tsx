import { ReactNode, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

type ModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};
const Modal = (props: ModalProps) => {
  const { title, children, onClose } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="bg-black-30 w-full h-full min-h-screen fixed top-0 left-0 z-[100] flex justify-center items-center">
      <div
        ref={modalRef}
        className="w-11/12 md:w-1/2 h-auto rounded-xl bg-white p-4 flex flex-col gap-4"
      >
        <div className="w-full flex justify-between items-center h-[20px] text-gray-600">
          <h4 className="text-base">{title}</h4>
          <button className="md:text-lg" onClick={onClose}>
            <RxCross2 />
          </button>
        </div>
        <div className="h-full max-h-[450px] overflow-auto px-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
