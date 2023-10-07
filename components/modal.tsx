import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onChange, title, description, children }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-1/2 left-1/2 max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-800 p-[25px] focus:outline-none">
          <Dialog.Title className="text-xl text-center font-bold mb-4">{title}</Dialog.Title>
          <Dialog.Description className="text-sm mb-5 text-center leading-normal">
            {description}
          </Dialog.Description>
          <div>{children}</div>

          <Dialog.Close asChild>
            <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;