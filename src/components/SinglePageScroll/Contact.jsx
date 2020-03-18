import { useEffect, useState } from "react";
import { GoLink, GoMarkGithub } from "react-icons/go";

const Contact = props => {
    const { contact } = props;
    const [ userContact, setUserContact ] = useState(null);

    useEffect(() => {
        setUserContact(contact)
    }, [])

    if (!userContact) return <h2>Loading</h2>;

    return (
        <main className="main__contact-container" >
            <section className="section__contact" >
                <div className="block__contact-header">
                    <h3>Contact</h3>
                </div>
            </section>
            <div className="block__contact">
                {userContact && userContact.map((info, index) => (
                    <React.Fragment key={index} >
                        <a href={info.github} alt="github"  className="link__contact"  >
                            <GoMarkGithub />
                        </a>
                        <p>{info.email}</p>
                    </React.Fragment>
                ))}
            </div>
        </main>
    );
}

export default Contact;

