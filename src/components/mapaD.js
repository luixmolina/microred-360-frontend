import React, { useEffect, useState, useRef } from 'react';
import Map, { Marker, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapa.css';
import './Form.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoMdCloseCircleOutline } from "react-icons/io";
import NavbarInside from './NavbarInside';

function MapaD() {

    const [viewState, setViewState] = React.useState({
        longitude: -76.52199013345891,
        latitude: 3.415396327978115,
        zoom: 4.5
    });

    const [hideLightbox, setHideLightbox] = useState(true);
    const [ocultarCajaUsar, setocultarCajaUsar] = useState(false);
    const [error, seterror] = useState(false);
    const [settings, setsettings] = useState({
        dragPan: true,
        dragRotate: true,
        scrollZoom: true,
        touchZoom: true,
        touchRotate: true,
        keyboard: true,

        doubleClickZoom: false
    });

    const [lngLat, setlngLat] = useState([-76.549480, 3.398332]);
    const [radiacion, setRadiacion] = useState('');
    const [estrato, setEstrato] = useState('');
    const [horaFalla, setHoraFalla] = useState('');
    const dia_falla = useRef(0);
    const mes_falla = useRef(0);
    const [fechaFalla, setFechaFalla] = useState('');
    const [timeout, settimeout] = useState('undefined');
    const [proveedor, setProveedor] = useState('');

    var datos = {
        "radiation_level": radiacion,
        "economic_level": estrato,
        "energy_company": proveedor,
        "day_month": dia_falla.current,
        "month_year": mes_falla.current,
        "time_day": horaFalla,
        "id_user": localStorage.getItem("id_user")
    };

    async function validarFormulario(event) {

        event.preventDefault();

        if (estrato === "" || proveedor === "" || horaFalla === "" || fechaFalla === "") {
            seterror(true);
        }
    }

    function obtenerFechaFalla(valorFecha) {

        var parts = valorFecha.split('-');
        setFechaFalla(valorFecha);
        dia_falla.current = parseInt(parts[2]);
        mes_falla.current = parseInt(parts[1]);

    }

    function handleTouch(evt) {

        // funcion para resetear el contador de 3 segundos cada vez que el usuario da doble click
        if (typeof timeout === 'number') {
            settimeout('undefined')
            clearTimeout(timeout)
        }

        settimeout(setTimeout(function() {

            // fija la longitud y lattitud del ultimo touch por el usuario
            var longitud = parseFloat(evt.lngLat.lng);
            var latitud = parseFloat(evt.lngLat.lat);
            setlngLat([longitud, latitud]);
            var datosBackend = {
                "lng": longitud,
                "ltd": latitud,
            };

            fetch(process.env.REACT_APP_URL_CALCULATOR_MAP, {
                method: "POST",
                headers: { "Content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify(datosBackend)

            }).then(
                response => response.json()

            ).then(
                data => {
                    setRadiacion(data[0].radiation_level);

                    if (data[0].radiation_level === 0) {

                        Swal.fire({
                            title: 'Por favor seleccione un punto en la zona continental de Colombia',
                            confirmButtonText: "Ok",
                            confirmButtonColor: '#4f7df2',
                        });
                    } else {
                        // muestra la caja del formulario
                        setHideLightbox(false)

                        var newViewState = {
                            longitude: longitud - 0.00040,
                            latitude: latitud,
                        }

                        setViewState(newViewState)
                            // desactiva las funciones del mapa
                        setsettings({
                            dragPan: false,
                            dragRotate: false,
                            scrollZoom: false,
                            touchZoom: false,
                            touchRotate: false,
                            keyboard: false,
                            doubleClickZoom: false,
                        })
                    }
                }
            )
        }, 3000));

    }


    function handleClick(evt) {

        if (hideLightbox === true) {

            var longitud = parseFloat(evt.lngLat.lng);
            var latitud = parseFloat(evt.lngLat.lat);

            setlngLat([longitud, latitud]);

            var datosBackend = {
                "lng": longitud,
                "ltd": latitud,
            };

            fetch(process.env.REACT_APP_URL_CALCULATOR_MAP, {
                method: "POST",
                headers: { "Content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify(datosBackend)

            }).then(

                response => response.json()

            ).then(
                data => {
                    setRadiacion(data[0].radiation_level);

                    if (data[0].radiation_level === 0) {

                        Swal.fire({
                            title: 'Por favor seleccione un punto en la zona continental de Colombia',
                            confirmButtonText: "Ok",
                            confirmButtonColor: '#4f7df2',
                        });
                    } else {
                        // muestra la caja de formulario
                        setHideLightbox(false)

                        var newViewState = {
                            longitude: longitud - 0.00040,
                            latitude: latitud,
                        }

                        setViewState(newViewState)
                            // deshabilitar los controles del mapa
                        setsettings({
                            dragPan: false,
                            dragRotate: false,
                            scrollZoom: false,
                            touchZoom: false,
                            touchRotate: false,
                            keyboard: false,
                            doubleClickZoom: false,
                        })
                    }
                }
            )
        }
    }

    function moverMapa(evt) {

        setViewState(evt.viewState)
    }


    function ocultarFormulario() {
        setHideLightbox(true)
        setsettings({
            dragPan: true,
            dragRotate: true,
            scrollZoom: true,
            touchZoom: true,
            touchRotate: true,
            keyboard: true,
        })
    }


    return ( < >
            <
            NavbarInside / >

            <
            div id = "mapa_container" >
            <
            Map {...viewState }
            onMove = { moverMapa }
            style = {
                { width: '100vw', height: '100vh' } }
            mapStyle = "mapbox://styles/mapbox/outdoors-v12"
            mapboxAccessToken = { process.env.REACT_APP_KEY_MAPBOX }

            onDblClick = { handleClick }
            onTouchEnd = { handleTouch } {...settings } >

            {
                lngLat[0] === -76.549480 ? "" : < Marker latitude = { lngLat[1] }
                longitude = { lngLat[0] }
                pitchAlignment = 'viewport' >
                <
                img src = "https://mr360bucket.s3.amazonaws.com/mr360_images/marker_image.png"
                alt = "" > < /img> <
                /Marker>}



                <
                /Map> <
                div className = { ` ${hideLightbox ? "form_mapa" : ""}` } >
                <
                div className = "  container_formulario" >
                <
                div className = "imagen_form" > < /div>

                <
                div className = "caja_form" >
                <
                div className = "encabezado_form" >
                <
                div className = "titulo" > Microrred 360 < /div> <div className="cerrar_boton"><IoMdCloseCircleOutline onClick={ocultarFormulario} size='30px'></IoMdCloseCircleOutline > < /div> <
                /div> <
                div className = "contenido_form" >
                <
                div className = "texto_formulario" >
                Para calcular tu microrred selecciona:
                    <
                    /div> <
                    br > < /br> <
                    div className = "caja_formulario" >
                    <
                    form onSubmit = { validarFormulario } >
                    <
                    span > Estrato socioeconómico: < /span><br></br >
                    <
                    select name = "estrato"
                id = "estrato"
                onChange = { ev => setEstrato(parseInt(ev.target.value)) } >
                <
                option value = "" > < /option> <
                option value = "1" > Estrato 1 < /option> <
                option value = "2" > Estrato 2 < /option> <
                option value = "3" > Estrato 3 < /option> <
                option value = "4" > Estrato 4 < /option> <
                option value = "5" > Estrato 5 < /option> <
                option value = "6" > Estrato 6 < /option> <
                /select> {error && estrato.length <= 0 ? <
                label className = "error_formulario" > Por favor seleccione el estrato socioeconómico < /label> : ""}<br></br > < br > < /br> <
                span > Proveedor del servicio de energía: < /span><br></br >
                    <
                    select name = "proveedor"
                id = "proveedor"
                onChange = { ev => setProveedor(parseInt(ev.target.value)) } >
                <
                option value = "" > < /option> <
                option value = "1" > CEO < /option> <
                option value = "2" > CELSIA < /option> <
                option value = "3" > ENEL < /option> <
                option value = "4" > AIR - E < /option> <
                option value = "5" > EMCALI < /option> <
                option value = "6" > EPM < /option> <
                option value = "7" > Otro < /option> <
                /select> {
                    error && proveedor.length <= 0 ?
                        <
                        label className = "error_formulario" > Por favor seleccione el proveedor de energía < /label> : ""} <
                        br > < /br> <br></br >
                        <
                        div className = 'cajaFecha' >
                        <
                        span > Fecha de indisponibilidad del servicio de energía : < /span> <
                        input type = "date"
                    id = "fechaFalla"
                    min = "2023-01-01"
                    max = "2023-12-30"
                    onChange = { ev => obtenerFechaFalla(ev.target.value) } > < /input> {
                            error && fechaFalla.length <= 0 ?
                                <
                                label className = "error_formulario" > Por favor seleccione la fecha de la falla < /label> : ""} <
                                br > < /br> <
                                span > Hora de indisponibilidad del servicio de energía : < /span> <
                                select name = "horaFalla"
                            id = "horaFalla"
                            onChange = { ev => setHoraFalla(parseInt(ev.target.value)) } >
                                <
                                option value = "" > < /option> <
                                option value = "0" > 0: 00 < /option> <
                                option value = "1" > 1: 00 < /option> <
                                option value = "2" > 2: 00 < /option> <
                                option value = "3" > 3: 00 < /option> <
                                option value = "4" > 4: 00 < /option> <
                                option value = "5" > 5: 00 < /option> <
                                option value = "6" > 6: 00 < /option> <
                                option value = "7" > 7: 00 < /option> <
                                option value = "8" > 8: 00 < /option> <
                                option value = "9" > 9: 00 < /option> <
                                option value = "10" > 10: 00 < /option> <
                                option value = "11" > 11: 00 < /option> <
                                option value = "12" > 12: 00 < /option> <
                                option value = "13" > 13: 00 < /option> <
                                option value = "14" > 14: 00 < /option> <
                                option value = "15" > 15: 00 < /option> <
                                option value = "16" > 16: 00 < /option> <
                                option value = "17" > 17: 00 < /option> <
                                option value = "18" > 18: 00 < /option> <
                                option value = "19" > 19: 00 < /option> <
                                option value = "20" > 20: 00 < /option> <
                                option value = "21" > 21: 00 < /option> <
                                option value = "22" > 22: 00 < /option> <
                                option value = "23" > 23: 00 < /option> <
                                /select> {
                                    error && horaFalla.length <= 0 ?
                                        <
                                        label className = "error_formulario" > Por favor seleccione la hora de la falla < /label> : ""} <
                                        /div> <
                                        div className = "nota_formulario" >
                                        Nota : La optimización técnico - económica se llevará a cabo considerando 2 horas de interrupción del servicio de energía en la red eléctrica principal. <
                                        /div> <
                                        div className = "calcula_microrred" > {
                                            proveedor !== "" && estrato !== "" && fechaFalla !== "" && horaFalla !== "" ? < Link to = "mr360"
                                            state = {
                                                { datos: datos } }
                                            relative = "path" > < button className = "btn_calcular" > CALCULAR < /button></Link > : < button className = "btn_calcular" > CALCULAR < /button>} <
                                                /div> <
                                                /form> <
                                                /div> <
                                                /div> <
                                                /div> <
                                                /div> <
                                                /div> <
                                                /div> <
                                                />
                                        )
                                }

                            export default MapaD