--
-- PostgreSQL database dump
--

-- Dumped from database version 11.4
-- Dumped by pg_dump version 11.4

-- Started on 2019-08-01 23:47:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 604 (class 1247 OID 16411)
-- Name: rol; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.rol AS ENUM (
    'administrador',
    'cliente'
);


ALTER TYPE public.rol OWNER TO postgres;

--
-- TOC entry 598 (class 1247 OID 16400)
-- Name: tipo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.tipo AS ENUM (
    'escultura',
    'pintura'
);


ALTER TYPE public.tipo OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 199 (class 1259 OID 16420)
-- Name: administrador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.administrador (
    id_admin integer NOT NULL,
    nickname character varying(20)
);


ALTER TABLE public.administrador OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16394)
-- Name: artistas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.artistas (
    id integer NOT NULL,
    nombre character varying(15),
    apellido character varying(15),
    nacionalidad character varying(20),
    fechadenacimiento date,
    movimiento character varying(15),
    campo character varying(15)
);


ALTER TABLE public.artistas OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16430)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    ciudad_cliente character varying(30),
    pais_cliente character varying(30),
    nickname character varying(20)
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16425)
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos (
    id_evento integer NOT NULL,
    titulo_evento character varying(20),
    fecha_evento date,
    descripcion_evento character varying(40),
    localidad_evento character varying(20)
);


ALTER TABLE public.eventos OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16435)
-- Name: mensajes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mensajes (
    id_mensaje integer NOT NULL,
    contenido character varying(300),
    id_cliente integer NOT NULL
);


ALTER TABLE public.mensajes OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16405)
-- Name: obras; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.obras (
    cod character(20) NOT NULL,
    nombreobra character varying(15),
    tematica character varying(15),
    precio double precision,
    id integer,
    alto double precision,
    ancho double precision,
    tipo_fiesta public.tipo
);


ALTER TABLE public.obras OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16415)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    nickname character varying(20) NOT NULL,
    nombreusuario character varying(15),
    apellidousuario character varying(15),
    rol_usuario public.rol,
    correo_usuario character varying(40)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 2855 (class 0 OID 16420)
-- Dependencies: 199
-- Data for Name: administrador; Type: TABLE DATA; Schema: public; Owner: postgres
--

--
-- TOC entry 2720 (class 2606 OID 16424)
-- Name: administrador administrador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (id_admin);


--
-- TOC entry 2714 (class 2606 OID 16398)
-- Name: artistas artistas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artistas
    ADD CONSTRAINT artistas_pkey PRIMARY KEY (id);


--
-- TOC entry 2724 (class 2606 OID 16434)
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);


--
-- TOC entry 2722 (class 2606 OID 16429)
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id_evento);


--
-- TOC entry 2726 (class 2606 OID 16439)
-- Name: mensajes mensajes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensajes
    ADD CONSTRAINT mensajes_pkey PRIMARY KEY (id_mensaje);


--
-- TOC entry 2716 (class 2606 OID 16409)
-- Name: obras obras_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obras
    ADD CONSTRAINT obras_pkey PRIMARY KEY (cod);


--
-- TOC entry 2718 (class 2606 OID 16419)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (nickname);


--
-- TOC entry 2727 (class 2606 OID 16440)
-- Name: obras fk_artistas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obras
    ADD CONSTRAINT fk_artistas FOREIGN KEY (id) REFERENCES public.artistas(id);


--
-- TOC entry 2730 (class 2606 OID 16455)
-- Name: mensajes fk_cliente; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensajes
    ADD CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES public.cliente(id_cliente);


--
-- TOC entry 2728 (class 2606 OID 16445)
-- Name: administrador fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_usuario FOREIGN KEY (nickname) REFERENCES public.usuario(nickname);


--
-- TOC entry 2729 (class 2606 OID 16450)
-- Name: cliente fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_usuario FOREIGN KEY (nickname) REFERENCES public.usuario(nickname);


-- Completed on 2019-08-01 23:47:28

--
-- PostgreSQL database dump complete
--

