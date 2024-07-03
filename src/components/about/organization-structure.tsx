"use client";

import React from "react";
import ReactFlow, {
  Background,
  Controls,
  type Edge,
  Handle,
  type Node,
  Position,
} from "reactflow";

import "reactflow/dist/style.css";

const beNodes: Node[] = [
  {
    id: "ketua-be",
    position: { x: 0, y: 0 },
    data: { label: "Ketua BE" },
    type: "root",
  },
  {
    id: "wakil-be",
    position: { x: 15, y: 128 },
    data: { label: "Wakil Ketua BE" },
    type: "internal",
  },
  {
    id: "bendahara-be",
    position: { x: -40, y: 256 },
    data: { label: "Bendahara" },
    type: "leaf",
  },
  {
    id: "sekretaris-be",
    position: { x: 150, y: 256 },
    data: { label: "Sekretaris" },
    type: "leaf",
  },
  {
    id: "Adkes",
    position: { x: 136 + -500, y: 256 + 128 },
    data: { label: "Adkes" },
    type: "leaf",
  },
  {
    id: "Advokastra",
    position: { x: 136 + -370, y: 256 + 128 },
    data: { label: "Advokastra" },
    type: "leaf",
  },
  {
    id: "Ekraf",
    position: { x: 136 + -200, y: 256 + 128 },
    data: { label: "Ekraf" },
    type: "leaf",
  },
  {
    id: "Keuangan",
    position: { x: 136 + -80, y: 256 + 128 },
    data: { label: "Keuangan" },
    type: "leaf",
  },
  {
    id: "Kominfo",
    position: { x: 136 + 75, y: 256 + 128 },
    data: { label: "Kominfo" },
    type: "leaf",
  },
  {
    id: "PD",
    position: { x: 136 + 220, y: 256 + 128 },
    data: { label: "PD" },
    type: "leaf",
  },
  {
    id: "PPM",
    position: { x: 136 + 320, y: 256 + 128 },
    data: { label: "PPM" },
    type: "leaf",
  },
  {
    id: "PSDO",
    position: { x: 136 + 435, y: 256 + 128 },
    data: { label: "PSDO" },
    type: "leaf",
  },
];

const beEdges: Edge[] = [
  {
    id: "ketua-be--wakil-be",
    source: "ketua-be",
    target: "wakil-be",
  },
  {
    id: "wakil-be--sekretaris-be",
    source: "wakil-be",
    target: "sekretaris-be",
  },
  {
    id: "wakil-be--bendahara-be",
    source: "wakil-be",
    target: "bendahara-be",
  },
  {
    id: "wakil-be--Adkes",
    source: "wakil-be",
    target: "Adkes",
  },
  {
    id: "wakil-be--Advokastra",
    source: "wakil-be",
    target: "Advokastra",
  },
  {
    id: "wakil-be--Ekraf",
    source: "wakil-be",
    target: "Ekraf",
  },
  {
    id: "wakil-be--Keuangan",
    source: "wakil-be",
    target: "Keuangan",
  },
  {
    id: "wakil-be--Kominfo",
    source: "wakil-be",
    target: "Kominfo",
  },
  {
    id: "wakil-be--PD",
    source: "wakil-be",
    target: "PD",
  },
  {
    id: "wakil-be--PPM",
    source: "wakil-be",
    target: "PPM",
  },
  {
    id: "wakil-be--PSDO",
    source: "wakil-be",
    target: "PSDO",
  },
];

const dpNodes: Node[] = [
  {
    id: "ketua-dp",
    position: { x: 850, y: 0 },
    data: { label: "Ketua DP" },
    type: "root",
  },
  {
    id: "wakil-dp",
    position: { x: 850 + 15, y: 128 },
    data: { label: "Wakil Ketua DP" },
    type: "internal",
  },
  {
    id: "bendahara-dp",
    position: { x: 850 + -40, y: 256 },
    data: { label: "Bendahara" },
    type: "leaf",
  },
  {
    id: "sekretaris-dp",
    position: { x: 850 + 150, y: 256 },
    data: { label: "Sekretaris" },
    type: "leaf",
  },
  {
    id: "Baleg",
    position: { x: 850 - 100, y: 256 + 128 },
    data: { label: "Baleg" },
    type: "leaf",
  },
  {
    id: "Burta",
    position: { x: 850 + 78, y: 256 + 128 },
    data: { label: "Burta" },
    type: "leaf",
  },
  {
    id: "Komisi",
    position: { x: 850 + 260, y: 256 + 128 },
    data: { label: "Komisi" },
    type: "leaf",
  },
];

const dpEdges: Edge[] = [
  {
    id: "ketua-dp--wakil-dp",
    source: "ketua-dp",
    target: "wakil-dp",
  },
  {
    id: "wakil-dp--sekretaris-dp",
    source: "wakil-dp",
    target: "sekretaris-dp",
  },
  {
    id: "wakil-dp--bendahara-dp",
    source: "wakil-dp",
    target: "bendahara-dp",
  },
  {
    id: "wakil-dp--Baleg",
    source: "wakil-dp",
    target: "Baleg",
  },
  {
    id: "wakil-dp--Burta",
    source: "wakil-dp",
    target: "Burta",
  },
  {
    id: "wakil-dp--Komisi",
    source: "wakil-dp",
    target: "Komisi",
  },
];

const nodeTypes = {
  root: RootNode,
  internal: InternalNode,
  leaf: LeafNode,
};

export function OrganizationStructure() {
  return (
    <div className="h-[448px] w-full md:h-[320px]">
      <OrganizationStructureFlow />
    </div>
  );
}

function OrganizationStructureFlow() {
  return (
    <div className="h-full">
      <ReactFlow
        id="organization-structure"
        nodes={[...beNodes, ...dpNodes]}
        edges={[...beEdges, ...dpEdges]}
        nodeTypes={nodeTypes}
        maxZoom={2}
        minZoom={0.5}
        nodesFocusable={false}
        edgesFocusable={false}
        preventScrolling={false}
        fitView
        nodesConnectable={false}
        nodesDraggable={false}
        defaultMarkerColor="#A3A3A3"
        defaultEdgeOptions={{
          animated: true,
          zIndex: -1000,
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

function RootNode({ data }: { data: { label: string } }) {
  return (
    <div className="z-20 rounded-md border-2 border-zinc-900 bg-background px-6 py-2">
      <div className="flex items-center justify-center">
        <h5 className="font-serif text-3xl font-semibold tracking-wide text-zinc-950 md:text-5xl">
          {data.label}
        </h5>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

function InternalNode({ data }: { data: { label: string } }) {
  return (
    <div className="z-20 rounded-md border-2 border-zinc-900 bg-background px-6 py-2">
      <Handle type="target" position={Position.Top} id="a" />
      <div className="flex items-center justify-center">
        <h5 className="font-serif text-xl font-semibold tracking-wide text-zinc-800 md:text-2xl">
          {data.label}
        </h5>
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

function LeafNode({ data }: { data: { label: string } }) {
  return (
    <div className="z-20 rounded-md border-2 border-zinc-900 bg-background px-6 py-2">
      <Handle type="target" position={Position.Top} id="a" />
      <div className="flex items-center justify-center">
        <h6 className="font-serif font-semibold tracking-wide text-zinc-800 md:text-lg">
          {data.label}
        </h6>
      </div>
    </div>
  );
}
