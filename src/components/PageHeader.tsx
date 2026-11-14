type Props = { title: string; subtitle?: string }

function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="page-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  )
}

export default PageHeader