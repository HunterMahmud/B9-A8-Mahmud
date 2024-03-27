import React, { useState } from "react";
import toast from "react-hot-toast";

const AboutUs = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (property, value) => {
    setContactDetails((prev) => ({
      ...prev,
      [property]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const prevUser = JSON.parse(localStorage.getItem("user")) || [];
    prevUser.push(contactDetails);
    localStorage.setItem("user", JSON.stringify(prevUser));
    toast.success("Your Information Saved to LocalStorage.")
  };

  return (
    <>
      <div className="mx-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[#131313] my-7 text-[40px] text-center font-bold">
            About Us
          </h1>
          <div className="flex flex-col gap-5">
            <p>
              Nova Books is an esteemed online bookshop dedicated to fostering a
              profound appreciation for literature among its patrons. Our
              fundamental belief is that bookshops serve as indispensable
              pillars of a vibrant and enriched culture. They serve as vital
              hubs where authors forge connections with readers, where new
              literary voices are discovered, and where the love for reading is
              instilled in young minds—a passion that can endure a lifetime.
            </p>
            <p>
              Moreover, bookshops are pivotal landmarks within our communities,
              serving as bastions of knowledge and culture. They are staffed by
              passionate individuals who possess a genuine ardor for books and
              the written word. As the landscape of book purchasing evolves with
              the advent of online shopping, we recognized the importance of
              providing an effortless and accessible avenue forimport { toast } from 'react-hot-toast';
 acquiring
              literature.
            </p>

            <p>
              At Nova Books, our mission is twofold: to facilitate seamless
              access to a vast array of literary works and to champion the
              invaluable role of independent bookshops. We endeavor to offer a
              user-friendly platform that empowers readers to procure their
              favorite titles with ease, all while supporting the independent
              bookstores that enrich our communities.
            </p>
            <p>
              We firmly believe that independent bookshops merit a greater
              presence within the online book-buying sphere. Through Nova Books,
              we aim to fortify the delicate ecosystem surrounding bookselling,
              ensuring that these cherished establishments remain integral to
              our cultural fabric and communal identity.
            </p>
            <p>
              Join us in celebrating the enduring allure of literature and the
              enduring legacy of independent bookshops. Together, let us
              preserve and perpetuate the invaluable contributions of these
              literary sanctuaries to our collective heritage. Nova Books—a
              beacon of literary excellence and a steadfast advocate for the
              enduring power of the written word.
            </p>
          </div>
          {/* about section done */}

          <h1 className="text-[#131313] text-[40px] my-10 text-center font-bold">
            FAQ
          </h1>

          <div className="flex flex-col gap-5">
            <div className="collapse max-w-6xl collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Q: What types of books does NovaBooks specialize in?
              </div>
              <div className="collapse-content">
                <p>
                  Ans: NovaBooks specializes in a curated collection of books
                  catering to diverse interests, including fiction, non-fiction,
                  mystery, romance, science fiction, fantasy, young adult,
                  children's books, and more.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Q: How can I add books to my reading list or wishlist on
                NovaBooks?
              </div>
              <div className="collapse-content">
                <p>
                  Ans: You can easily add books to your reading list or wishlist
                  by clicking the respective buttons available on each book's
                  details page. This allows you to keep track of books you're
                  interested in reading or purchasing in the future.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Q: Does NovaBooks have a dedicated section for kids' books?
              </div>
              <div className="collapse-content">
                <p>
                  Ans: Yes, NovaBooks offers a special "Kids Zone" section
                  exclusively dedicated to children's books. Here, parents and
                  children can explore a wide variety of age-appropriate books,
                  ranging from picture books to chapter books.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I access detailed information about a specific book?
              </div>
              <div className="collapse-content">
                <p>
                  Ans: To view detailed information about a book, simply click
                  on its title or cover image to visit the book's details page.
                  Here, you'll find comprehensive information such as the book's
                  synopsis, author details, genre, ratings, and more.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Q: Can I view my read list and wishlist on NovaBooks?
              </div>
              <div className="collapse-content">
                <p>
                  Ans: Yes, NovaBooks provides convenient access to your read
                  list and wishlist. You can easily navigate to these sections
                  from your account dashboard. Additionally, you have the option
                  to sort and manage your lists based on various criteria such
                  as title, author, genre, and date added.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Q: Does NovaBooks offer a customizable bar chart to track
                reading progress?
              </div>
              <div className="collapse-content">
                <p>
                  Ans: Yes, NovaBooks features a customizable bar chart tool
                  that allows users to visualize their reading progress. Simply
                  access the "Reading Stats" section from your account dashboard
                  to view a graphical representation of the number of pages
                  you've read over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* faq section ends */}
        <div>
          <section className="py-6 mt-6">
            <form
              onSubmit={handleSubmit}
              className="container w-full max-w-6xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
            >
              <h2 className="w-full text-3xl font-bold leading-tight">
                Contact us
              </h2>
              <div>
                <label className="block mb-1 ml-1">Name</label>
                <input
                  onChange={(e) => handleInput("name", e.target.value)}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
              <div>
                <label className="block mb-1 ml-1">Email</label>
                <input
                  onChange={(e) => handleInput("email", e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
              <div>
                <label className="block mb-1 ml-1">Message</label>
                <textarea
                  onChange={(e) => handleInput("message", e.target.value)}
                  id="message"
                  type="text"
                  placeholder="Message..."
                  className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <footer className="bg-gray-700 w-full">
        <div className="container flex flex-col mx-auto p-8">
          <h1 className="text-center text-4xl font-semibold text-gray-200">
            Nova Books
          </h1>
          <div className="flex flex-col justify-center pt-6">
            <div className="flex justify-center space-x-4">
              <a
                rel="noopener noreferrer"
                href="https://github.com/huntermahmud/"
                title="github"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-green-600 text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  fill="currentColor"
                  viewBox="-74.4 -120.90175 644.8 725.4105"
                >
                  <path d="M165.9 389.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 0C106.1 0 0 105.3 0 244c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 449.8 496 354.9 496 244 496 105.3 383.5 0 244.8 0zM97.2 344.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/huntermahmud/"
                title="Linkedin"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-green-600 text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="30"
                  width="30"
                  viewBox="-11.493675 -16.3118 99.61185 97.8708"
                >
                  <path d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67" />
                  <path d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1" />
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/hasan.almahmud.101/"
                title="Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-green-600 text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-4 h-4"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="mailto:mahmudthedatahunter@gmail.com"
                title="Gmail"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-green-600 text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-4 h-4"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center px-6 pt-12 text-sm">
            <span className="text-gray-100 text-center">
              © Copyright 2024. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
