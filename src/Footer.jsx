


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-white text-base-content mt-10 p-10">
  <aside>
    <img className=" h-[100px]" src="https://cdn-icons-gif.flaticon.com/15547/15547179.gif" alt="" />
    <p className=" font-mono">
      Apon Bekari Industries Ltd.
      <br />
      Providing reliable  since 2030
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p className=" font-mono">Copyright © {new Date().getFullYear()} - All right reserved by Minhazul Abedin Apon</p>
  </aside>
</footer>
            
        </div>
    );
};

export default Footer;