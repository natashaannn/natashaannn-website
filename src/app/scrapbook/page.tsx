import styles from "../page.module.css";
import { Header } from "@/lib/header/Header";

export default function ScrapbookPage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<section>
					<h2>Scrapbook</h2>
					<p>Coming soon: projects, experiments, and work-in-progress notes.</p>
				</section>
			</main>
		</div>
	);
}
