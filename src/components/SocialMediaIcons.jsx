const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/arash-goodarzi-61848563/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/arash13579/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/aras.goodarzi/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/arash-goodarzi"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
