--
-- PostgreSQL database dump
--

-- Dumped from database version 11.4
-- Dumped by pg_dump version 11.4

-- Started on 2019-08-16 21:18:12

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
-- TOC entry 602 (class 1247 OID 16472)
-- Name: rol; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.rol AS ENUM (
    'administrador',
    'cliente'
);


ALTER TYPE public.rol OWNER TO postgres;

--
-- TOC entry 599 (class 1247 OID 16467)
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
-- TOC entry 199 (class 1259 OID 16487)
-- Name: administrador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.administrador (
    id_admin integer NOT NULL,
    registrodeactividad character varying(20),
    ad_nickname character varying(20)
);


ALTER TABLE public.administrador OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16461)
-- Name: artista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.artista (
    id integer NOT NULL,
    nombre character varying(20),
    apellido character varying(20),
    nacionalidad character varying(20),
    fechadenacimiento date,
    movimiento character varying(10),
    campo character varying(10),
    id_admin integer
);


ALTER TABLE public.artista OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16502)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id integer NOT NULL,
    ciudad character varying(20),
    pais character varying(20),
    cl_nickname character varying(20)
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16497)
-- Name: comentario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentario (
    id_comentario integer NOT NULL,
    contenido character varying(200),
    fecha date,
    id_cliente integer,
    id_obras character(20)
);


ALTER TABLE public.comentario OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16492)
-- Name: evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento (
    id integer NOT NULL,
    titulo character varying(20),
    fecha date,
    "descripci¢n" character varying(40),
    localidad character varying(20),
    id_admin integer
);


ALTER TABLE public.evento OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16507)
-- Name: mensajes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mensajes (
    id_mensaje integer NOT NULL,
    contenido character varying(200),
    id_cliente integer
);


ALTER TABLE public.mensajes OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16477)
-- Name: obras; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.obras (
    cod character(20) NOT NULL,
    nombre character varying(20),
    tematica character varying(20),
    precio double precision,
    artista integer,
    alto double precision,
    ancho double precision,
    tipo_fiesta public.tipo
);


ALTER TABLE public.obras OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16482)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    nickname character varying(20) NOT NULL,
    nombre character varying(20),
    apellido character varying(20),
    rol_usuario public.rol,
    correo character varying(20),
    password character varying(20)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 2866 (class 0 OID 16487)
-- Dependencies: 199
-- Data for Name: administrador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.administrador (id_admin, registrodeactividad, ad_nickname) FROM stdin;
\.


--
-- TOC entry 2863 (class 0 OID 16461)
-- Dependencies: 196
-- Data for Name: artista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.artista (id, nombre, apellido, nacionalidad, fechadenacimiento, movimiento, campo, id_admin) FROM stdin;
\.


--
-- TOC entry 2869 (class 0 OID 16502)
-- Dependencies: 202
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (id, ciudad, pais, cl_nickname) FROM stdin;
\.


--
-- TOC entry 2868 (class 0 OID 16497)
-- Dependencies: 201
-- Data for Name: comentario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentario (id_comentario, contenido, fecha, id_cliente, id_obras) FROM stdin;
\.


--
-- TOC entry 2867 (class 0 OID 16492)
-- Dependencies: 200
-- Data for Name: evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento (id, titulo, fecha, "descripci¢n", localidad, id_admin) FROM stdin;
\.


--
-- TOC entry 2870 (class 0 OID 16507)
-- Dependencies: 203
-- Data for Name: mensajes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mensajes (id_mensaje, contenido, id_cliente) FROM stdin;
\.


--
-- TOC entry 2864 (class 0 OID 16477)
-- Dependencies: 197
-- Data for Name: obras; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.obras (cod, nombre, tematica, precio, artista, alto, ancho, tipo_fiesta) FROM stdin;
\.


--
-- TOC entry 2865 (class 0 OID 16482)
-- Dependencies: 198
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (nickname, nombre, apellido, rol_usuario, correo, password) FROM stdin;
\.


--
-- TOC entry 2724 (class 2606 OID 16491)
-- Name: administrador administrador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (id_admin);


--
-- TOC entry 2718 (class 2606 OID 16465)
-- Name: artista artista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artista
    ADD CONSTRAINT artista_pkey PRIMARY KEY (id);


--
-- TOC entry 2730 (class 2606 OID 16506)
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);


--
-- TOC entry 2728 (class 2606 OID 16501)
-- Name: comentario comentario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT comentario_pkey PRIMARY KEY (id_comentario);


--
-- TOC entry 2726 (class 2606 OID 16496)
-- Name: evento evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_pkey PRIMARY KEY (id);


--
-- TOC entry 2732 (class 2606 OID 16511)
-- Name: mensajes mensajes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensajes
    ADD CONSTRAINT mensajes_pkey PRIMARY KEY (id_mensaje);


--
-- TOC entry 2720 (class 2606 OID 16481)
-- Name: obras obras_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obras
    ADD CONSTRAINT obras_pkey PRIMARY KEY (cod);


--
-- TOC entry 2722 (class 2606 OID 16486)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (nickname);


--
-- TOC entry 2733 (class 2606 OID 16512)
-- Name: artista fk_admin; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artista
    ADD CONSTRAINT fk_admin FOREIGN KEY (id_admin) REFERENCES public.administrador(id_admin);


--
-- TOC entry 2736 (class 2606 OID 16537)
-- Name: evento fk_administrador; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT fk_administrador FOREIGN KEY (id_admin) REFERENCES public.administrador(id_admin);


--
-- TOC entry 2734 (class 2606 OID 16517)
-- Name: obras fk_artista; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.obras
    ADD CONSTRAINT fk_artista FOREIGN KEY (artista) REFERENCES public.artista(id);


--
-- TOC entry 2741 (class 2606 OID 16552)
-- Name: mensajes fk_clie; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensajes
    ADD CONSTRAINT fk_clie FOREIGN KEY (id_cliente) REFERENCES public.cliente(id);


--
-- TOC entry 2738 (class 2606 OID 16527)
-- Name: comentario fk_cliente; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES public.cliente(id);


--
-- TOC entry 2737 (class 2606 OID 16522)
-- Name: comentario fk_obras; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentario
    ADD CONSTRAINT fk_obras FOREIGN KEY (id_obras) REFERENCES public.obras(cod);


--
-- TOC entry 2735 (class 2606 OID 16532)
-- Name: administrador fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_usuario FOREIGN KEY (ad_nickname) REFERENCES public.usuario(nickname);


--
-- TOC entry 2739 (class 2606 OID 16542)
-- Name: cliente fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_usuario FOREIGN KEY (cl_nickname) REFERENCES public.usuario(nickname);


--
-- TOC entry 2740 (class 2606 OID 16547)
-- Name: cliente fk_usuariocl; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_usuariocl FOREIGN KEY (cl_nickname) REFERENCES public.usuario(nickname);


-- Completed on 2019-08-16 21:18:12

--
-- PostgreSQL database dump complete
--

