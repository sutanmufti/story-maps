// @ts-nocheck
import L from 'leaflet'

const $map = L.map('map')

/**
 * This functions clears every map layers except the basemaps. This function runs everytime a page is navigated to.
 */
function cleanLayersRoot(){
    allLegends.forEach(p=>p.remove())
    $map.eachLayer((layer)=>{
        if (
            layer != Esri_WorldTopoMap &&
            layer != osm &&
            layer != Esri_WorldImagery && 
            layer != CartoDB_Positron &&
            layer != Esri_WorldGrayCanvas

        ){
            layer.remove()
        }  

    })
}

/**
 * Reset map to the default bounding box. This is if the user wants to go back to default location.
 * 
 * @param seconds 
 */
async function resetmapview(seconds: number){    
    $map.flyToBounds(defaultbound,{
        duration: seconds
    })
}

/**
 * Functions to invoke every time a page is navigated to. Page index 0 will invoke localpageFunctions[0]().
 */
const localPageFunctions = [
    ()=>{
        resetmapview(4)
        cleanLayersRoot()
        
    },
    ()=>{
        cleanLayersRoot() // resets the map
        distanceJakarta.addTo($map) // add the layer
        polyline.openPopup() // open the popup
        $map.flyToBounds(defaultbound) // set the map view
    },
    ()=>{
        cleanLayersRoot()
        jumlahpenduduk.addTo($map)
        legendPopulation.addTo($map);
        $map.flyToBounds(defaultbound)
        
    },
    ()=>{
        cleanLayersRoot()
        mrteksisting.addTo($map)
        Esri_WorldGrayCanvas.addTo($map)
        $map.flyToBounds(L.latLngBounds([-6.29893,106.75602],[-6.18668,106.83072]),{
            easeLinearity: 0.75,
            duration: 4
        })
    },
    ()=>{
        cleanLayersRoot()
        const c1 = [106.65319,-6.34365]
        const c2 = [107.00368,-6.10611]
        krl.addTo($map)
        $map.flyToBounds(L.latLngBounds([c1[1],c1[0]],[c2[1],c2[0]]),{
            easeLinearity: 0.75,
            duration: 4
        })
    },
    ()=>{
        cleanLayersRoot()
        brt.addTo($map)
        const c1 = [106.74379,-6.30346]
        const c2 = [106.94146,-6.11693]
        $map.flyToBounds(L.latLngBounds([c1[1],c1[0]],[c2[1],c2[0]]),{
            easeLinearity: 0.75,
            duration: 2
        })
    },
    ()=>{
        cleanLayersRoot()
        lrt.addTo($map)
        const c1 = [106.889773,-6.193902]
        const c2 = [106.919836,-6.153982]
        $map.flyToBounds(L.latLngBounds([c1[1],c1[0]],[c2[1],c2[0]]),{
            easeLinearity: 0.75,
            duration: 4
        })
    },
    ()=>{
        cleanLayersRoot()
        jaklingko.addTo($map)
        const c1 = [106.78112,-6.25065]
        const c2 = [106.92099,-6.13974]
        $map.flyToBounds(L.latLngBounds([c1[1],c1[0]],[c2[1],c2[0]]),{
            easeLinearity: 0.75,
            duration: 4
        })
        Esri_WorldGrayCanvas.addTo($map)
    },()=>{
        resetmapview(4)
        cleanLayersRoot()
        Esri_WorldTopoMap.addTo($map)
        layerControl.expand()
    },
    
]