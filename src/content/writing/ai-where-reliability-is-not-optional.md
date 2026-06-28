---
title: "AI where reliability is not optional"
description: "What changes when ML has to run at the edge, under constraints, and inside high-stakes environments."
date: 2026-06-28
draft: false
---

Most AI demos happen in forgiving conditions. The network is available, compute is elastic, observability is assumed, and failure is usually a bad screenshot or a missed answer.

Industrial AI does not get that luxury.

The systems I care about have to operate close to the real world: on constrained hardware, near physical processes, behind network boundaries, and inside environments where reliability is a requirement rather than a nice property. Pharma, life sciences, manufacturing, and field operations all change the shape of the problem.

## The model is only one layer

A working AI product is not just a model. It is the runtime around it, the inference path, the sync layer, the operator interface, the deployment process, and the recovery story when something goes wrong.

That is why I think in layers. Go for edge runtime and systems work. Python and ONNX where inference needs to move quickly. Kotlin for mobile and backend services. NATS JetStream for resilient sync. React and TypeScript for the product surface people actually touch.

The stack matters less than the fit. Each layer has to earn its place.

## Research has to survive deployment

I am especially interested in reinforcement learning for real-world agents because the gap between research and deployment is still too wide. Agents need rewards that can be verified, environments that map to reality, and enough operational discipline to make the system trustworthy outside a notebook.

That is the reason behind my current open-source work around RL with verifiable rewards. I want more builders to have the tools I wish existed when production RL systems had to be assembled from scratch.

## The real constraint is trust

In high-stakes environments, accuracy is not enough. People need to understand what the system is doing, when to rely on it, when to override it, and how it behaves when the easy assumptions fail.

That kind of trust comes from engineering details: latency, logging, offline behavior, validation, permission boundaries, and clear interfaces. It also comes from product judgment: knowing what not to automate, what to expose, and where a human should stay in the loop.

AI that ships is not the loudest system. It is the one that keeps working when the demo is over.
