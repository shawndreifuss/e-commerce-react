import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardFooter,
} from "@material-tailwind/react";
 
export function UploadFileBtn() {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };


 
  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
            <div className="mt-10 mb-10 text-center flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">Upload your files</h2>
                <p className="text-xs text-gray-500">File should be of format .mp4, .avi, .mov or .mkv</p>
            </div>
            <form action="#" className="relative w-4/5 self-center h-40 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
                <input type="file" id="file-upload" className="hidden" name="avatar" onChange={handleFileUpload} accept=".jpg, .jpeg, .png"/>
                 {avatar ?  <div className="flex flex-col justify-center items-center w-full h-full">
                 <img src={URL.createObjectURL(avatar)} alt="" className="h-full w-full" />
                 <input type="file" id="file-upload" className="hidden" name="avatar" onChange={handleFileUpload} accept=".jpg, .jpeg, .png"/>
                 <label htmlFor="file-upload" className="text-blue cursor-pointer underlined" >Change Image</label>
                 </div>
                 : 
                <label for="file-upload" className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                 
                    <p className="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
                   
                    <svg className="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                 
                </label>
                }
            </form>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Add Profile Image
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}



 {/* {avatar ? (
            <img src={URL.createObjectURL(avatar)} alt="" className="h-5 w-5" />
          ) : null}
          <div className="avatar">
            <label htmlFor="file">
              <Button
                variant="gradient"
                className="flex mt-5 items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload Image
              </Button>
            </label>
            <input
              type="file"
              id="file"
              name="avatar"
              onChange={handleFileUpload}
              accept=".jpg, .jpeg, .png"
            />
          </div> */}