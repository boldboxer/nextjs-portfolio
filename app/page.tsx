import Intro from "@/components/intro"
import NewsletterForm from "@/components/news-letter-form"
import RecentPosts from "@/components/recent-posts"
import RecentProjects from "@/components/recentprojects"


export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />

        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
      </div>
    </section>
  )
}