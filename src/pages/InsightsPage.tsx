import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Section, Head, Cta, Rail, Photo, Btn, ArrowLink, Chips, CoverArt as Cov, cover } from '../components/Ui';
import { BLOG_POSTS } from '../data/siteData';
import { PUBS, TOPICS, FRAMEWORKS, ARTICLE_FILTERS, ARTICLE_TAGS, ARTICLE_SUBJECTS, QBD_SERIES, LEARNING_PATH, PERSPECTIVES, Pub, PubType } from '../data/v24';

interface P { navigate: (r: string) => void; openConsultationModal: () => void; showToast: (m: string) => void }

const CoverArt: React.FC<{ p: Pub }> = ({ p }) => <Cov title={p.title} type={p.type} />;

const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export const InsightsPage: React.FC<P> = ({ navigate, openConsultationModal, showToast }) => {
  const [type, setType] = useState<'All' | PubType>('All');
  const [topic, setTopic] = useState<string | null>(null);
  const [art, setArt] = useState<string>('All');

  const lib = useMemo(() => PUBS.filter(p => (type === 'All' || p.type === type) && (!topic || p.topics.includes(topic))), [type, topic]);
  const articles = useMemo(() => BLOG_POSTS.filter(b => art === 'All' || (ARTICLE_TAGS[b.slug] || []).includes(art)), [art]);
  const flagship = PUBS[0];
  const supporting = [PUBS[1], PUBS[2], PUBS[3], PUBS[4], PUBS[5]];
  const pickTopic = (t: string) => { setTopic(topic === t ? null : t); setType('All'); jump('library'); };

  return (
    <div>
      <section className="hero hero--ins">
        <div className="hero__shade" style={{ background: 'linear-gradient(120deg,#0A1F3D 0%,#12305A 70%,#0F4A6E 100%)' }} />
        <div className="wrap hero__body">
          <div className="hero__copy">
            <p className="hero__kicker">Insights &amp; Resources</p>
            <h1 className="hero__title" style={{ fontSize: 'clamp(34px,5vw,58px)' }}>Connecting Science, Development, Manufacturing and Commercialization</h1>
            <div className="hero__lede"><p>Explore InnoTech perspectives, white papers, executive guides, playbooks, frameworks and technical articles addressing pharmaceutical development, CMC, MS&amp;T, technology transfer, manufacturing, commercialization, lifecycle management and emerging digital technologies.</p></div>
            <div className="catnav">
              {[['featured', 'Featured'], ['library', 'White Papers'], ['library', 'Executive Guides'], ['library', 'Playbooks'], ['frameworks', 'Frameworks & Tools'], ['learning', 'Learning Series'], ['articles', 'Technical Articles & Perspectives']].map(([id, l]) => (
                <a key={l} href={`#${id}`} onClick={e => { e.preventDefault(); jump(id); }}>{l}</a>
              ))}
            </div>
          </div>
          <div className="montage" aria-hidden="true">
            {['cover-qbd', 'cover-ai', 'cover-eye', 'cover-mol'].map((c, i) => <img key={c} src={cover(c)} alt="" style={{ ['--k' as any]: i }} />)}
          </div>
        </div>
      </section>

      <Section id="featured">
        <Head title="Featured Publications" intro="Our strongest intellectual property, not simply the newest posts." />
        <div className="pubs">
          <div className="pub-flag">
            <Cov className="coverbig" title={flagship.title} type={flagship.type} />
            <div>
              <span className="type-tag">{flagship.type}</span>
              <h3>{flagship.title}</h3><p>{flagship.text}</p>
              <ArrowLink onClick={openConsultationModal}>Request this publication</ArrowLink>
            </div>
          </div>
          <div className="pubs__side">
            {supporting.map(p => (
              <div key={p.id} className="pub-sm">
                <div className="coverart coversm" aria-hidden="true"><b>{p.type}</b></div>
                <div><h3>{p.title}</h3><p>{p.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="gray">
        <Head title="Browse by Topic" intro="Choose a topic to filter the publication library." />
        <div className="topicgrid">
          {TOPICS.map(t => <button key={t} className="filter topic" aria-pressed={topic === t} onClick={() => pickTopic(t)}>{t}</button>)}
        </div>
      </Section>

      <Section id="library">
        <Head title="White Papers & Executive Publications" intro="The strongest legacy website papers and newer executive publications in one curated library." />
        <div className="filters" role="group" aria-label="Publication type">
          {(['All', 'White Paper', 'Executive Guide', 'Playbook', 'Learning Series'] as const).map(t => <button key={t} className="filter" aria-pressed={type === t} onClick={() => setType(t)}>{t === 'All' ? 'All types' : t}</button>)}
          {topic && <button className="filter" aria-pressed="true" onClick={() => setTopic(null)}>{topic} ✕</button>}
        </div>
        <div className="pubgrid">
          {lib.map(p => (
            <article key={p.id} className="pubcard">
              <div className="pubcard__art"><CoverArt p={p} /></div>
              <div className="pubcard__body">
                <span className="type-tag" style={{ alignSelf: 'flex-start' }}>{p.type}</span>
                <h3>{p.title}</h3><p>{p.text}</p>
                <ArrowLink onClick={openConsultationModal}>Request publication</ArrowLink>
              </div>
            </article>
          ))}
          {lib.length === 0 && <p style={{ color: 'var(--muted)' }}>No publications match these filters yet. Clear a filter to see more.</p>}
        </div>
      </Section>

      <Section id="frameworks" tone="gray">
        <Head title="Frameworks & Executive Tools" intro="Practical tools for translating technical knowledge into readiness, decisions and execution." />
        <div className="tiles tiles--3">
          {FRAMEWORKS.map(([t, d]) => (
            <div className="tile" key={t} style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>{t}</h3><p style={{ flex: 1 }}>{d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', marginTop: 18 }}>
                <button className="alink" onClick={() => showToast('Framework documents are shared on request. Use Discuss Application to ask for it.')}>View Framework</button>
                <button className="alink" onClick={() => jump('library')}>Related Guide</button>
                <button className="alink" onClick={openConsultationModal}>Discuss Application</button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="articles">
        <Head title="Technical Articles & Perspectives" intro="Our technical library shows the depth of development and drug-delivery work behind the executive publications." />
        <div className="filters" role="group" aria-label="Article topic">
          {['All', ...ARTICLE_FILTERS].map(f => <button key={f} className="filter" aria-pressed={art === f} onClick={() => setArt(f)}>{f}</button>)}
        </div>
        <div className="pubgrid">
          {articles.map(b => (
            <article key={b.id} className="pubcard" style={{ cursor: 'pointer' }} onClick={() => navigate(`/blogs/${b.slug}`)}>
              <div className="pubcard__art"><img src={b.image} alt="" loading="lazy" style={{ objectPosition: 'center' }} onError={e => { (e.currentTarget as HTMLImageElement).src = '/img/svc-2.jpg'; }} /></div>
              <div className="pubcard__body">
                <span className="type-tag" style={{ alignSelf: 'flex-start' }}>Technical Article</span>
                <h3>{b.title.split(':')[0]}</h3>
                <p>{b.summary.length > 150 ? b.summary.slice(0, 150).replace(/\s+\S*$/, '') + '…' : b.summary}</p>
                <span className="pubcard__meta">{b.publishedAt} · {b.readTime}</span>
                <ArrowLink>Read article</ArrowLink>
              </div>
            </article>
          ))}
          {articles.length === 0 && <p style={{ color: 'var(--muted)' }}>No articles in this topic yet.</p>}
        </div>
        <p style={{ margin: '36px 0 12px', fontWeight: 700, color: 'var(--navy)' }}>Subject areas in the library</p>
        <Chips items={ARTICLE_SUBJECTS} />
      </Section>

      <Section tone="gray">
        <div className="split split--wide">
          <div className="split__media" style={{ display: 'flex', justifyContent: 'center' }}><Cov className="coverbig coverbig--light" title="The Evolution of QbD" type="White Paper" /></div>
          <div>
            <Head title="Signature Series: Evolution of QbD" />
            <div className="steps5 steps5--2">
              {QBD_SERIES.map(([a, b, c]) => <div className="step" key={a}><h3>{a}</h3><p><strong>{b}.</strong> {c}</p></div>)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="learning">
        <div className="split split--wide">
          <div>
            <Head title="Executive Learning Series" intro="From Small Molecules to Biologics: Building the Next Generation of Commercialization Leaders." />
            <div className="prose"><p>A practical learning roadmap for leaders expanding their understanding across biologics development, manufacturing, technology transfer, validation and commercialization.</p>
              <p style={{ fontSize: 14 }}>Presented as learning and leadership content, not a claim of deep biologics operating specialization.</p></div>
          </div>
          <div className="split__media" style={{ display: 'flex', justifyContent: 'center' }}><Cov className="coverbig coverbig--light" title="From Small Molecules to Biologics" type="Learning Series" /></div>
        </div>
        <div style={{ marginTop: 40 }} className="rail-wrap"><Rail stages={LEARNING_PATH} /></div>
      </Section>

      <Section tone="gray">
        <Head title="Latest Perspectives" />
        <div className="pubgrid">
          {PERSPECTIVES.map(([t, d, ph]) => (
            <article className="pubcard" key={t}>
              <div className="pubcard__art"><Photo k={ph} w={800} alt="" /></div>
              <div className="pubcard__body"><span className="type-tag" style={{ alignSelf: 'flex-start' }}>Perspective</span><h3>{t}</h3><p>{d}</p></div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 32 }}><Btn variant="line" onClick={() => jump('featured')}>View All Insights &amp; Resources</Btn></div>
      </Section>

      <Cta title="From Insight to Execution" text="These resources reflect how InnoTech approaches real development, CMC, manufacturing and commercialization challenges. The same thinking can be applied through CMC development support, project leadership, technology transfer, on-site technical support, readiness assessment, technical execution, commercialization support or executive advisory." label="Discuss Your Project" onClick={openConsultationModal} photo="floor" />
    </div>
  );
};
