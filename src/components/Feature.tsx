import React from 'react';
import { Feature as F } from '../data/v24';
import { Photo, Chips, Rail, ArrowLink } from './Ui';

/** Reusable service / expertise block: photograph + copy + expandable scope. Alternates sides. */
export const FeatureBlock: React.FC<{ f: F; flip?: boolean; navigate: (r: string) => void }> = ({ f, flip, navigate }) => (
  <article className="feat" id={f.id}>
    <div className={`split ${flip ? 'split--flip' : ''}`}>
      <div>
        <h2 className="feat__title">{f.title}</h2>
        {f.paras.map(p => <p key={p} className="feat__text">{p}</p>)}
        {f.flow && <div className="feat__flow"><Rail stages={f.flow} compact /></div>}
        {f.quote && <p className="feat__quote">{f.quote}</p>}
        {f.scope && (
          <details className="more">
            <summary>{f.scopeLabel || 'Scope'}</summary>
            <div><Chips items={f.scope} /></div>
          </details>
        )}
        <div className="feat__links">
          {f.related.map(([l, r]) => <ArrowLink key={l} onClick={() => navigate(r)}>{l}</ArrowLink>)}
        </div>
      </div>
      <div className="split__media"><Photo k={f.photo} w={1200} alt="" /></div>
    </div>
  </article>
);
