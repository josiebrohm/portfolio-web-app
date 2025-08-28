import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useState } from "react";


export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<Card className="contact-form" title="Get in touch!">
			<InputText placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
			<InputText placeholder="Email address" value ={email} onChange={(e) => setEmail(e.target.value)} keyfilter="email"/>
			
		</Card>
	)
}