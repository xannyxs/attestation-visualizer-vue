<script lang="ts">
import ForceGraph3D from '3d-force-graph';

export default {
  mounted() {
    const g = ForceGraph3D()(this.$refs.graph);
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
  }
};
</script>

<template>
  <div ref="graph"></div>
</template>
