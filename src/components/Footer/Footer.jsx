import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__links opacity-50 text-white no-underline">
          <ul className=" pt-8 pl-8">
            <li className="list-none">
              <a href="#">FAQ </a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Only on Netflix</a>
            </li>
          </ul>

          <ul className="list-none pt-8 pl-8">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>

          <ul className="list-none pt-8 pl-8">
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>

          <ul className="list-none  pt-8 pl-8">
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Buy Gift Cards</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>

        <h1 className="text-white text-center pb-8 pt-8   opacity-50 hover:opacity-100 text-3xl">
          By: <a href="https://samrawita.netlify.app/"> Samrawit Amare</a>
        </h1>
      </div>
    </div>
  );
}

export default Footer
