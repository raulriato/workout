--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: workouts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workouts (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    muscle character varying(255) NOT NULL,
    weight integer NOT NULL,
    series integer NOT NULL,
    repetitions integer NOT NULL
);


--
-- Name: workouts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.workouts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: workouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.workouts_id_seq OWNED BY public.workouts.id;


--
-- Name: workouts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workouts ALTER COLUMN id SET DEFAULT nextval('public.workouts_id_seq'::regclass);


--
-- Data for Name: workouts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.workouts VALUES (2, 'Leg Press', 'Perna', 350, 20, 38);
INSERT INTO public.workouts VALUES (4, 'Cadeira Extensora', 'Perna', 4980, 522, 88);
INSERT INTO public.workouts VALUES (5, 'Cadeira Flexora', 'Perna', 4050, 255, 59);
INSERT INTO public.workouts VALUES (6, 'Gemeos', 'Perna', 4050, 255, 59);
INSERT INTO public.workouts VALUES (7, 'Crucifixo Reto', 'Peito', 9000, 754, 89);
INSERT INTO public.workouts VALUES (8, 'Crucifixo Inclinado', 'Peito', 9000, 900, 89);


--
-- Name: workouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.workouts_id_seq', 8, true);


--
-- Name: workouts workouts_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workouts
    ADD CONSTRAINT workouts_name_key UNIQUE (name);


--
-- Name: workouts workouts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workouts
    ADD CONSTRAINT workouts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

