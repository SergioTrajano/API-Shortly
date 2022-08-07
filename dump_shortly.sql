--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

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
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "userId", url, "shortUrl", "visitCount", "createdAt") FROM stdin;
3	20	https://i.pinimg.com/564x/ce/5b/1a/ce5b1a0dd58026863bfb5328affad0c4.jpg	InBtxz	0	2022-08-06
4	20	https://i.pinimg.com/564x/ec/dd/ee/ecddeea549befc2b9070ca7798b0177c.jpg	E76Hnt	0	2022-08-06
5	19	https://i.pinimg.com/236x/f2/9c/a8/f29ca8659a6a497f2943d58fad9686aa.jpg	ftbSrN	0	2022-08-06
2	20	https://i.pinimg.com/564x/97/7c/58/977c58c2b616cc32d4c12bec1028714b.jpg	bg2VN2	6	2022-08-06
7	19	https://i.pinimg.com/236x/08/41/aa/0841aa75aa8aae18ae1b70146f8f3c96.jpg	-My7Om	2	2022-08-06
6	19	https://i.pinimg.com/236x/23/c6/c5/23c6c568a2d6cff21ea09a41e2d6bfef.jpg	hoXXhy	6	2022-08-06
8	19	https://slug-store.vercel.app/lesma	1ZYL6P	1	2022-08-06
9	19	https://slug-store.vercel.app/	c2Jrwz	1	2022-08-06
10	19	https://github.com/SergioTrajano/API-Shortly	PGrnV_	2	2022-08-06
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
17	a	apo@gmail.com	$2b$13$cuzQq5MpdgGIa8pDdukDWOCwQNcJ4u31HuNHFd6869EmPJn2Wlxx.	2022-08-06
18	a	apo8@gmail.com	$2b$13$PT3FvTO9hFlgqG3/hHQ8rOFnAGiGEo8O.uX2D0Jj//RiFnO/RSPI.	2022-08-06
19	teste1	test@gmail.com	$2b$13$0PH5SY7kml2dxmzNEpunS.liu3cQVHp.Mkljd2.jJkzTOU9aH68ai	2022-08-06
20	teste	teste@teste.com	$2b$13$SROch6hoW/ttVaNGCbq9e.HsWSRqAMTESC/mxNTuJHzztREIwzyq.	2022-08-06
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 20, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

