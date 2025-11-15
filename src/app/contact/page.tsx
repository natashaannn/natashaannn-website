import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { GameButton } from "@/lib/button/GameButton";
import { IconBox } from "@/lib/icon/IconBox";
import { TypewriterWaveText } from "@/lib/animated-text/TypewriterWaveText";
import { InlineButton } from "@/lib/button/InlineButton";

export default function ContactPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<section style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "0" }}>
					<h1 style={{ margin: "15px 0 0px 0" }}>
						<TypewriterWaveText firstColor="var(--light-brown)" secondColor="var(--light-green)">
							⚠️ For HIGH-PRIORITY requests ⚠️
						</TypewriterWaveText>
					</h1>
					<div style={{ maxWidth: "600px", textAlign: "left"}}>
						<p>
							For high-priority requests like media collaborations, podcast collabs and appearances, speaking at events,
							and internal workshops, reach me at &nbsp;
							<InlineButton 
							href="mailto:natasha@ragtechdev.com" 
							primaryColor="var(--light-green)"
							secondaryColor="var(--dark-green)"
							>
							natasha@ragtechdev.com
							</InlineButton> 
							&nbsp;through the form below. My team at &nbsp;
							<InlineButton href="https://ragtechdev.com/">
							 ragTech
							 </InlineButton> 
							&nbsp;will notify me of emails, so this is the best way to get my attention!
							<br />
							<i style={{ color: "var(--dark-brown)" }}>
							(I will be less likely to respond to non-form emails as I receive a lot of spam!)</i>
						</p>
					</div>
					<form
						style={{
							width: "100%",
							maxWidth: "600px",
							display: "flex",
							flexDirection: "column",
							gap: "12px",
							textAlign: "left",
						}}
					>
						<label>
							Name
							<input
								type="text"
								name="name"
								placeholder="Your name"
								style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
							/>
						</label>
						<label>
							Email (So I can respond!)
							<input
								type="email"
								name="email"
								placeholder="you@example.com"
								style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
							/>
						</label>
						<label>
							Organisation / event
							<input
								type="text"
								name="organisation"
								placeholder="Where are you reaching out from?"
								style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
							/>
						</label>
						<label>
							How can I help?
							<textarea
								name="message"
								placeholder="Share details about your podcast, event, or collaboration idea."
								rows={5}
								style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", resize: "vertical" }}
							/>
						</label>
						<div style={{ marginTop: "8px" }}>
							<GameButton type="submit" color="var(--light-brown)">
								Send email
							</GameButton>
						</div>
					</form>
					<h1 style={{ margin: "15px 0 0px 0" }}>
						<TypewriterWaveText firstColor="var(--light-blue)" secondColor="var(--light-green)">
							🫂 For GENERAL requests 🫂
						</TypewriterWaveText></h1>
					<div style={{ maxWidth: "600px", textAlign: "left"}}>
						<p>
							If you&apos;ve met me at an event and would like to stay in touch, connect with me on LinkedIn
							with a message describing where we met (I only connect with people I&apos;ve met in person due to
							many sales bots!). I can take awhile on LinkedIn to reply as I have a full-time job, but I will get back to you!
						</p>
					</div>
					<div style={{ marginTop: "8px" }}>
						<Link href="https://www.linkedin.com/in/natashaannn/">
							<GameButton color="var(--light-blue)">
								<IconBox background="white">
									<Image
										src="/links/linkedin.svg.webp"
										alt="LinkedIn logo"
										width={25}
										height={25}
									/>
								</IconBox>
								Connect on LinkedIn
							</GameButton>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
