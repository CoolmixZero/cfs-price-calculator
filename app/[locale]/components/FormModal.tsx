"use client"

interface FormModalProps {
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
}

const FormModal: React.FC<FormModalProps> = ({
  title,
  body,
  footer,
}) => {
  return (
      <>
        <div
          className="
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            relative
            w-full
            z-50
            outline-none
            focus:outline-none
            
            text-black
          "
        >
          <div
            className="
            relative
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto
            h-full
            lg:h-auto
            md:h-auto
          "
          >
            {/* CONTENT AREA */}
              <div
                className="
                  translate
                  h-full
                  lg:h-auto
                  md:h-auto
                  border-0
                  rounded-lg
                  shadow-lg
                  relative
                  flex
                  flex-col
                  w-full
                  bg-white
                  outline-none
                  focus:outline-none
                "
              >
                {/* HEADER AREA */}
                <div
                  className="
                    flex
                    items-center
                    p-6
                    rounded-t
                    justify-center
                    relative
                    border-b-[1px]
                  "
                >
                  <div
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    {title}
                  </div>
                </div>
                {/* BODY AREA */}
                <div
                  className="
                    relative
                    p-6
                    flex-auto
                  "
                >
                  {body}
                </div>
                {/* FOOTER AREA */}
                <div  
                  className="
                    flex
                    flex-col
                    gap-2
                    p-6
                  "
                >
                  {footer}
                </div>
              </div>
            </div>
          </div>
      </>
  );
}

export default FormModal;