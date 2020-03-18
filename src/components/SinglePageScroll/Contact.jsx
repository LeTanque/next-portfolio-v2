import { useEffect, useState } from "react";

import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = props => {
    const { contact } = props;
    const [ userContact, setUserContact ] = useState(null);
    const [ text, setText ] = useState("");
    const [ textCopied, setTextCopied ] = useState(null);

    useEffect(() => {
        setUserContact(contact)
    }, [])

    const timer = () => {
        setTimeout(() => {
            setTextCopied(null)
        }, 2000);
    }

    const copyEmail = () => {
        const email = text;
        email.select();
        document.execCommand("copy");
        setTextCopied(true);
        timer();
    }

    if (!userContact) return <h2>Loading</h2>;

    return (
        <main className="main__contact-container" >
            {/* <section className="section__contact" >
                <div className="block__contact-header">
                    <h3>Contact</h3>
                </div>
            </section> */}
            <div className="block__contact">
                {userContact && userContact.map((info, index) => (
                    <React.Fragment key={index} >
                        <div className="block__link-icons">
                            <a href={info.github} alt="github"  className="link__contact"  >
                                <AiOutlineGithub />
                            </a>
                            <a href={info.github} alt="linkedin"  className="link__contact"  >
                                <AiFillLinkedin />
                            </a>
                            <div  className="link__contact" onClick={() => copyEmail()} >
                                <AiOutlineMail />

                                <div 
                                    className="block__tooltip"
                                    style={{ opacity: `${textCopied ? "0.75" : "0"}` }}
                                >Email copied to clipboard!</div>

                            </div>
                        </div>
                        <textarea 
                            ref={(textarea) => setText(textarea)}
                            defaultValue={info.email}
                            className="hidden"
                        />
                    </React.Fragment>
                ))}
            </div>
        </main>
    );
}

export default Contact;

