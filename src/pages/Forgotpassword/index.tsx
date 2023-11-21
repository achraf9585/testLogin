import React from "react";

import { Button, Text } from "components";

const ForgotpasswordPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-platform items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-start w-full"
          style={{ backgroundImage: "url('images/img_image_1024x1440.png')" }}
        >
          <div className="bg-gray-900_60 flex flex-col items-center justify-start p-[203px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col items-start justify-start my-[33px] w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900_01"
                      size="txtPlatformBold36"
                    >
                      Reset password
                    </Text>
                    <Text
                      className="leading-[24.00px] text-base text-blue_gray-300 w-full"
                      size="txtPlatformRegular16"
                    >
                      Enter your email address to receive a new login key and
                      link to sign in and change your password
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col gap-1 h-[60px] md:h-auto items-start justify-center mt-14 px-5 py-4 rounded-lg w-[546px] sm:w-full">
                    <Text
                      className="text-blue_gray-300 text-xs w-auto"
                      size="txtPlatformRegular12"
                    >
                      Email
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPlatformRegular14"
                    >
                      Text
                    </Text>
                  </div>
                  <Button className="cursor-pointer font-medium min-w-[544px] sm:min-w-full mt-44 text-base text-center">
                    Reset password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotpasswordPage;
