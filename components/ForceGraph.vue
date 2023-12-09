<script lang="ts">
  import ForceGraph3D from 'force-graph'

  const g = ForceGraph3D()(document.getElementById('graph')!)
  const N = 300;
  const gData = {
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
    links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
  };

  g.graphData(gData);
</script>

<template>
  <div id="graph"></div>
</template>
