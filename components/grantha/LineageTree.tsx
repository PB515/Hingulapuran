import { Fragment } from "react";
import type { Lineage, LNode } from "@/lib/lineages";

/* G9 — a dynastic line rendered as a styled top-down tree (cards + gold
   connectors with edge labels), in the Mata-ni-Pachedi palette, instead of a
   raw list. The Goddess node is set apart. */

function NodeCard({ node }: { node: LNode }) {
  return (
    <div className={`max-w-[15rem] rounded-[var(--radius)] border px-5 py-3 text-center ${node.goddess ? "border-swarna bg-rakta" : "border-border bg-rakta/30"}`}>
      {node.deva && <p className="font-[family-name:var(--font-display)] text-lg text-patra">{node.deva}</p>}
      <p className={`font-[family-name:var(--font-display-latin)] text-sm ${node.goddess ? "text-swarna" : "text-patra"}`}>{node.name}</p>
      {node.sub && <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs leading-snug text-muted">{node.sub}</p>}
      {node.goddess && <p className="mt-1 font-[family-name:var(--font-display-latin)] text-[10px] uppercase tracking-[0.22em] text-swarna/80">kuldevi</p>}
    </div>
  );
}

function Connector({ edge }: { edge?: string }) {
  return (
    <div className="flex flex-col items-center">
      <span aria-hidden className="h-6 w-px bg-swarna/40" />
      {edge && (
        <>
          <span className="max-w-sm px-3 text-center font-[family-name:var(--font-body)] text-[11px] italic leading-snug text-loha">{edge}</span>
          <span aria-hidden className="h-6 w-px bg-swarna/40" />
        </>
      )}
    </div>
  );
}

export function LineageTree({ lineage }: { lineage: Lineage }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-patra">{lineage.deva}</h2>
        <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.18em] text-loha">{lineage.chapters}</p>
      </div>
      <p className="mt-1 font-[family-name:var(--font-display-latin)] text-base text-swarna">{lineage.title}</p>
      <p className="mt-2 max-w-2xl font-[family-name:var(--font-body)] leading-relaxed text-muted">{lineage.blurb}</p>

      <div className="mt-8 flex flex-col items-center">
        {lineage.tiers.map((tier, i) => (
          <Fragment key={i}>
            {i > 0 && <Connector edge={tier.edge} />}
            <div className="flex flex-wrap justify-center gap-3">
              {tier.nodes.map((n, j) => (
                <NodeCard key={j} node={n} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>

      {lineage.note && (
        <p className="mt-8 border-l-2 border-loha/40 pl-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-loha">
          {lineage.note}
        </p>
      )}
    </div>
  );
}
