<template>
    <div class="trave_lookamap">
        <el-amap vid="amapDemo" :center="mapCenter" :zoom="12" class="amap-demo" >
            <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events"  :vid="index" :key="index"></el-amap-marker>
        </el-amap>
    </div>
</template>

<script>
import VueAMap from 'vue-amap'
import { AMapManager } from 'vue-amap';
import { constants } from 'fs';
let amapManager = new VueAMap.AMapManager();
var sum;
let positions;

export default {
    name:'lookamap',
    created(){
        // this.$http.post('/api/traver')
        //     .then((res) => {
        //        positions = res.data;
        //        sum = positions.length;
        //        console.log(positions.length);
        //     },(err) => {
        //         console.log(err)
        //     });
    },
    data: function() {
        return {
            markers: [],
            searchOption: {
                city: '广州',
                citylimit: true
            },
            mapCenter: [114.746550, 22.673431]
        };
    },
     mounted() {
        let markers = [];
        let self = this;
       
        self.$http.post('/api/traver')
            .then((res) => {
               positions = res.data;
               sum = positions.length;
               console.log(positions.length);
            },(err) => {
                console.log(err)
            });
        //let positions = [{"lng":102.704412,"lat":25.042165,"place":"云南"},{"lng":114.746550,"lat": 22.673431,"place":"巽寮湾"}];

        for (let i = 0 ; i < sum; i ++) {
          markers.push({
            position: [positions[i].lng, positions[i].lat],
            events: {
              click() {
                // self.$nextTick(() => {
                  let param =  positions[i].place;
                  console.log("i am here:"+ positions.length);
                  console.log('this position: '+ positions[i].place);
                //   self.$http.post('/api/traver',{param})
                //     .then((res) => {
                           
                //         },(err) => {
                //             console.log(err)
                //         });
                  // self.$router.push({ name: 'photo', params: { userId: wise }})
                  self.$router.push({ name: 'photo'});
                // });
              }
            }
          });

        }

        this.markers = markers;
    },
    methods:{
        
       
    }
}
</script>

<style lang="less" scoped>

.amap-demo{
    margin: 0 auto;
    width: 90%;
    height: 500px;
}
</style>
