import React from "react";

import { Button, Img, Text } from "components";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-platform items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-start w-full"
          style={{ backgroundImage: "url('images/img_image.png')" }}
        >
          <div className="bg-gray-900_60 flex flex-col items-center justify-start p-[203px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col items-center justify-start my-[33px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900_01"
                        size="txtPlatformBold36"
                      >
                        Administration panel
                      </Text>
                      <Text
                        className="text-base text-blue_gray-300"
                        size="txtPlatformRegular16"
                      >
                        Please fill in your details to access your account.
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col gap-1 h-[60px] md:h-auto items-start justify-center mt-[61px] px-5 py-4 rounded-lg w-[546px] sm:w-full">
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
                    <div className="bg-white-A700 border border-black-900_19 border-solid flex flex-col h-[60px] md:h-auto items-start justify-center mt-[25px] px-5 py-4 rounded-lg w-[546px] sm:w-full">
                      <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                        <Text
                          className="text-blue_gray-300 text-xs w-auto"
                          size="txtPlatformRegular12"
                        >
                          Password
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                          <Text
                            className="flex-1 mt-1 text-gray-900 text-sm w-full"
                            size="txtPlatformRegular14"
                          >
                            Text
                          </Text>
                          <Img
                            className="h-[18px] mb-[3px] w-5"
                            src="images/img_hideicon.svg"
                            alt="hideicon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[34px] w-full">
                      <div className="flex flex-row gap-3 items-start justify-start w-[23%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <Text
                          className="text-blue_gray-300 text-sm"
                          size="txtPlatformRegular14Bluegray300"
                        >
                          Remember me
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-end py-0.5">
                        <a
                          href="javascript:"
                          className="mt-0.5 text-indigo-A400 text-right text-sm"
                        >
                          <Text size="txtPlatformRegular14IndigoA400">
                            Forgot your password?
                          </Text>
                        </a>
                      </div>
                    </div>
                    <Button className="cursor-pointer font-medium min-w-[544px] sm:min-w-full mt-[53px] text-base text-center">
                      Sign in
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
