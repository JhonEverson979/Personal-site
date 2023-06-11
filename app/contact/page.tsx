"use client";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../config/firebase";
const Page = () => {
  interface CreateFormData {
    name: string;
    email: String;
    message: String;
  }

  const [err, setErr] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>();

  const messagesRef = collection(db, "messages");

  const onCreateMessage = async (data: CreateFormData) => {
    try {
      await addDoc(messagesRef, {
        ...data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const errForm = () => {
    if (errors.email || errors.message || errors.name) {
      setErr(true);
    }
  };

  const refName = useRef<any>();
  const refEmail = useRef<any>();
  const refMessage = useRef<any>();
  const cleanTexts = () => {
    refName.current.value = "";
    refEmail.current.value = "";
    refMessage.current.value = "";
  };

  useEffect(() => {
    errForm();
  }, [errors]);

  useEffect(() => {
    cleanTexts();
  }, []);
  return (
    <main className="w-full my-24 text-white">
      <div className="h-full flex justify-center items-center">
        <div className=" w-[70%] md:w-[50%] lg:w-[40%]">
          <div>
            <h2 className="text-3xl text-center">Contact</h2>
          </div>
          <div>
            <form
              method="POST"
              action="https://formsubmit.co/jhoneverson979@gmail.com"
              // onSubmit={handleSubmit(onCreateMessage)}
            >
              <div className=" space-y-3">
                <div>
                  <h2>Name</h2>
                  <input
                    ref={refName}
                    name="name"
                    required
                    // {...register("name", { required: true })}
                    className="w-full rounded-md px-2 bg-white/10 border border-white text-white"
                    placeholder="First & Last"
                    type="text"
                  />
                </div>

                <div>
                  <h2>Email</h2>
                  <input
                    ref={refEmail}
                    name="email"
                    required
                    className="w-full rounded-md px-2 bg-white/10 border border-white text-white"
                    placeholder="example@gmail.com"
                    type="email"
                    // {...register("email", { required: true })}
                  />
                </div>

                <div>
                  <h2>Message</h2>
                  <textarea
                    ref={refMessage}
                    name="message"
                    required
                    // {...register("message", { required: true })}
                    className="w-full h-32 rounded-md px-2 text-white bg-white/10 border border-white"
                  ></textarea>
                </div>
                {err && (
                  <p className=" text-center text-red-600 font-bold mt-0">
                    all fields are required
                  </p>
                )}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-white/10 border hover:bg-white/75 hover:border-purple-400 transition-all ease-in-out border-white h-8 w-28 rounded-lg cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
