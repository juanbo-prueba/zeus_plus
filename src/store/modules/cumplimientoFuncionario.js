import CumplimientoFucionarioService from "@/services/CumplimientoFucionarioService";

export default {
    namespaced: true,
    state: {
        cumplimientoFuncionarioGeneral: [],
        cumplimientoFuncionarioLineaMkt: [],
        cumplimientoFucionarioPresentacion: [],
        filtroCodLineaMkt: 0,
        error: false,
        errorMessage:'',
        columnChart: {
            options: {
                chart: {
                    height: 250,
                    type: 'bar'
                },
                title: {
                    text: 'Lineas de Marketing',
                    align: 'center'
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                colors: ['#2d353c', '#009bdb'],
                xaxis: {
                    categories: [],
                    axisBorder: {
                        show: true,
                        color: 'rgba(182, 194, 201, 0.5)',
                        height: 1,
                        width: '100%',
                        offsetX: 0,
                        offsetY: -1
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#b6c2c9',
                        height: 6,
                        offsetX: 0,
                        offsetY: 0
                    }
                },
                yaxis: {
                    title: {
                        text: 'Bs. Monto'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "Bs " + val
                        }
                    }
                }
            },
            series: [{
                name: 'Presupuesto',
                data: []
            }, {
                name: 'Ventas',
                data: []
            }]
        },
    },
    mutations: {
        setCumplimientoGeneral( state, cumplimientoFuncionarioGeneral ) {
            state.cumplimientoFuncionarioGeneral = cumplimientoFuncionarioGeneral;
        },
        setCumplimientoGeneralLineaMkt( state, { data, lineas, presupuesto, ventas} ) {
            state.cumplimientoFuncionarioLineaMkt = data;

            console.log("Series: " + state.columnChart.series[0].data );

            state.columnChart.options = {
                chart: {
                    height: 500,
                    type: 'bar'
                },
                title: {
                    text: 'Lineas de Marketing',
                    align: 'center'
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                colors: ['#2d353c', '#009bdb'],
                xaxis: {
                    categories: lineas,
                    axisBorder: {
                        show: true,
                        color: 'rgba(182, 194, 201, 0.5)',
                        height: 1,
                        width: '100%',
                        offsetX: 0,
                        offsetY: -1
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#b6c2c9',
                        height: 6,
                        offsetX: 0,
                        offsetY: 0
                    }
                },
                yaxis: {
                    title: {
                        text: 'Bs. Monto'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "Bs " + val
                        }
                    }
                }
            }

            state.columnChart.series = [{
                name: 'Presupuesto',
                data: presupuesto
            },{
                name: 'Ventas',
                data: ventas
            }];

        },
        setCumplimientoPresentacion( state, data ) {
            state.cumplimientoFucionarioPresentacion = data;
        },
        setErrorCumplimientoFucionario( state, payload ){
            state.error = true;
            state.errorMessage = payload;
            state.cumplimientoFuncionarioGeneral = []
        },
        setFiltroCodLineaMkt (state, data) {
            console.log("Entra data: " + data );
            state.filtroCodLineaMkt = data;
            console.log("entra vacio");
            console.log("fin state.filtroCodLineaMkt data: " + state.filtroCodLineaMkt );
        }
    },
    actions: {
        async cargarCumplimientoFucionarioGeneral({commit}, codPersonal){
            try {
                const {data} = await CumplimientoFucionarioService.getCumplimientoFucionarioGeneral(codPersonal);
                commit('setCumplimientoGeneral', data );
            }catch (e) {
                commit( 'setErrorCumplimientoFucionario', e.message );
            }finally {
                console.log( 'La peticion para obtener los datos cumplimiento general a terminado' );
            }
        },
        async cargarCumplimientoFucionarioLineaMkt({commit}, codPersonal){
            try {
                const {data} = await CumplimientoFucionarioService.obtenerCumplimientoFucionarioLineaMkt(codPersonal);
                // console.log("data kt: " + JSON.stringify(data) );

                const lineas = [];
                const presupuesto = [];
                const ventas = [];
                console.log("data.length: " + data.length);
                for (var i=0; i< data.length; i++){
                     lineas.push(data[i].nombreLineaMkt);
                     presupuesto.push(Math.round(data[i].montoPresupuesto));
                     ventas.push(Math.round(data[i].montoVenta));
                }
                console.log("Lineas MKT: " + lineas);
                commit('setCumplimientoGeneralLineaMkt', { data, lineas, presupuesto, ventas });
               // commit('setDiagramaLineasMarketing', lineas );
            }catch (e) {
                commit( 'setErrorCumplimientoFucionario', e.message );
            }finally {
                console.log( 'La peticion para obtener los datos cumplimiento lineas MKT a terminado' );
            }
        },
        async cargarCumplimientoFucionarioPresentacion({commit}, codPersonal){
            try {
                const {data} = await CumplimientoFucionarioService.obtenerCumplimientoFucionarioPresentacion(codPersonal);
                commit('setCumplimientoPresentacion', data );
            }catch (e) {
                commit( 'setErrorCumplimientoFucionario', e.message );
            }finally {
                console.log( 'La peticion para obtener los datos cumplimiento por presentacion a terminado' );
            }
        }
    },
    getters: {
        cumplimientoFuncionarioGeneral: ( state ) => {
            return state.cumplimientoFuncionarioGeneral;
        },
        cumplimientoFuncionarioLineaMkt: ( state ) => {
            return state.cumplimientoFuncionarioLineaMkt;
        },
        columnChart: (state) => {
            return state.columnChart;
        },
        filtrarPresentacionesMkt: (state) => {
           let presentaciones = state.cumplimientoFucionarioPresentacion;
           if(state.filtroCodLineaMkt > 0 ) {
               presentaciones = presentaciones.filter( presentacion => presentacion.codLineaMkt === state.filtroCodLineaMkt)
           }
           return presentaciones;
        }
    }
}