import Link from "next/link";
// import { db, schema, sql } from "@unkey/db";
import { Github } from "lucide-react";
import GlobeClient from "@/components/gloab";
import Background from "@/components/landing/background";
import { DemoDashboard } from "@/components/landing/demo-dashboard";
import { RateLimitDemo } from "@/components/landing/rate-limit-demo";
import { TemporaryKeyDemo } from "@/components/landing/temp-key-demo";
import { UsageDemo } from "@/components/landing/usage-demo";
import { Changelog } from "@/components/landing/changelog";

export const revalidate = 60;

export default async function LandingPage() {
  // const [workspaces, apis, keys, stars] = await Promise.all([
  //   db
  //     .select({ count: sql<number>`count(*)` })
  //     .from(schema.workspaces)
  //     .then((res) => res.at(0)?.count ?? 0),
  //   db
  //     .select({ count: sql<number>`count(*)` })
  //     .from(schema.apis)
  //     .then((res) => res.at(0)?.count ?? 0),
  //   db
  //     .select({ count: sql<number>`count(*)` })
  //     .from(schema.keys)
  //     .then((res) => res.at(0)?.count ?? 0),
  //   await fetch("https://api.github.com/repos/unkeyed/unkey", {
  //     headers: {
  //       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => res.json()),
  // ]);

  const [workspaces, apis, keys, stars] = [
    100,
    2340,
    450,
    {
      stargazers_count: 1000,
    },
  ];

  const markers = [
    {
      location: [1.3521, 103.8198],
      size: 50,
    },
    {
      location: [40.73061, -73.935242],
      size: 25,
    },
    {
      location: [37.773972, -122.431297],
      size: 35,
    },
    {
      location: [39.9042, 116.4074],
      size: 135,
    },
    {
      location: [51.5074, 0.1278],
      size: 80,
    },
  ];

  return (
    <main>
      <section className=" flex items-center justify-between my-10 px-4 md:px-16">
        <div className=" space-y-8 md:py-16 py-8 mt-6 md:mt-10">
          <div className="">
            <h2 className=" text-3xl font-bold text-gray-900 relative w-min">
              <span className="bg-gradient-to-tr from-gray-600 to-gray-700 via-stone-900 text-transparent bg-clip-text animate-background-pan">
                U
              </span>
              <span>nkey</span>
              <span className=" w-9/12 h-[2px] mt-2 bottom-0 left-0 bg-black absolute"></span>
            </h2>
            <p className=" md:text-6xl font-bold mt-2 text-4xl bg-gradient-to-tr from-gray-900 to-gray-700 via-stone-500 text-transparent bg-clip-text animate-background-pan">
              Accelerate your API Development
            </p>
          </div>
          <p className=" max-w-lg text-lg font-light">
            Open source API Key management solution. to create, manage and
            validate API Keys for your users. built with{" "}
            <span className=" font-bold">security</span> and{" "}
            <span className=" font-bold">speed</span> in mind.
          </p>
          <div className="relative mt-8">
            <div className="absolute -inset-2">
              <div className="w-full h-full mx-auto opacity-30 blur-lg filter" />
            </div>
            <div className="relative inline-flex mt-10 group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200" />
              <Link
                href="/auth/sign-up"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
        <div className="relative pt-16 overflow-hidden hidden md:block">
          <div className="mx-auto max-w-4xl drop-shadow-xl shadow-black py-6 pl-6">
            <DemoDashboard />
            <div className=" h-4/6 w-[1px] absolute bg-gray-300 left-0 bottom-6"></div>
            <div className=" w-4/6 h-[1px] absolute bg-gray-300 left-6 top-0"></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50/30 shadow-md border md:rounded-r-xl rounded-xl md:rounded-none backdrop-blur-lg sm:py-16 lg:py-20 md:mr-16 mx-4 md:ml-0">
        <div className="px-4 mx-auto md:max-w-7xl  sm:px-6 lg:px-8">
          <div className=" border-b border-black/60">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              How it works
            </h2>
            <p className="max-w-md my-3 text-base font-normal text-gray-600 font-pj">
              Get started in under five minutes
            </p>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto mt-8 lg:mt-20 lg:flex-row lg:max-w-none">
            <div className="relative flex-1 w-full overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="py-8 px-9">
                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-lg font-pj">
                  1
                </div>
                <p className="mt-5 text-lg font-medium text-gray-900 font-pj">
                  Sign up for your free Unkey account.
                </p>
              </div>
            </div>

            <div className="block -my-1 lg:hidden">
              <svg
                className="w-4 h-auto text-gray-300"
                viewBox="0 0 16 32"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)"
                />
              </svg>
            </div>

            <div className="hidden lg:block lg:-mx-2">
              <svg
                className="w-auto h-4 text-gray-300"
                viewBox="0 0 81 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                />
              </svg>
            </div>

            <div className="relative flex-1 w-full">
              <div className="absolute -inset-4">
                <div
                  className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                />
              </div>

              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="py-8 px-9">
                  <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-lg font-pj">
                    2
                  </div>
                  <p className="mt-5 text-lg font-medium text-gray-900 font-pj">
                    Create keys in the dashboard, or using the Unkey API
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:-mx-2">
              <svg
                className="w-auto h-4 text-gray-300"
                viewBox="0 0 81 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                />
              </svg>
            </div>

            <div className="block -my-1 lg:hidden">
              <svg
                className="w-4 h-auto text-gray-300"
                viewBox="0 0 16 32"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)"
                />
              </svg>
            </div>

            <div className="relative flex-1 w-full overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="py-8 px-9">
                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-lg font-pj">
                  3
                </div>
                <p className="mt-5 text-lg font-medium text-gray-900 font-pj">
                  Verify your user as part of your API authorization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 mx-4 md:mx-0 bg-gradient-to-tr grid md:grid-cols-2 grid-cols-1 place-items-center from-gray-50/80 to-white/50 sm:py-16 lg:py-20">
        <GlobeClient />

        <div className="">
          <h2 className="text-3xl text-center md:text-left font-bold text-gray-900 md:text-5xl">
            Keys where your users are
          </h2>
          <p className="mt-4 text-lg text-center md:text-left text-gray-700 sm:mt-5 max-w-lg">
            Your users are everywhere and so is Unkey. Unkey stores keys
            globally, making each request as fast possible regardless of your
            location.
          </p>
          <div className="relative inline-flex mt-10 group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200" />
            <Link
              href="https://unkey.dev/auth/sign-up"
              target="_blank"
              title=""
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Start Building
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
            <div className="text-center md:text-left lg:pr-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Per-key rate limiting
              </h2>
              <p className="mt-4 text-base text-gray-700 sm:mt-8 font-pj">
                We understand that each user is different, so Unkey gives you
                the ability to decide the rate limits as you issue each key.
                Giving you complete control while protecting your application.
              </p>

              <div className="relative inline-flex mt-10 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200" />
                <Link
                  href="https://docs.unkey.dev/features/ratelimiting"
                  target="_blank"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div>
              <RateLimitDemo />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
            <div>
              <TemporaryKeyDemo />
            </div>

            <div className="lg:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Temporary keys
              </h2>
              <p className="mt-4 text-lg text-gray-700 sm:mt-5 font-pj">
                Want to add a free trial to your API? Unkey allows you to issue
                temporary keys, once the key expires we delete it for you.
              </p>
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200" />
                <Link
                  href="https://docs.unkey.dev/features/temp-keys"
                  target="_blank"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
            <div className="text-center md:text-left lg:pr-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Usage analytics (Coming Soon)
              </h2>
              <p className="mt-4 text-base text-gray-700 sm:mt-8 font-pj">
                Need to charge a customer on their usage? Want to know who your
                biggest clients are? Unkey provides real time key analytics
                giving you insights on every user
              </p>
            </div>
            <div className=" hidden md:block">
              <UsageDemo />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              We go BRRRRRR
            </h2>
          </div>

          <div className="relative mt-12 lg:mt-20 lg:max-w-5xl lg:mx-auto">
            <div className="absolute -inset-2">
              <div
                className="w-full h-full mx-auto opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              />
            </div>

            <div className="relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-white sm:grid-cols-2 gap-y-12 lg:grid-cols-3 rounded-2xl gap-x-20">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj">
                  {Intl.NumberFormat("en", { notation: "compact" }).format(
                    workspaces
                  )}
                </p>
                <h3 className="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj">
                  Workspaces
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj">
                  {Intl.NumberFormat("en", { notation: "compact" }).format(
                    apis
                  )}
                </p>
                <h3 className="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj">
                  APIs
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold text-gray-900 lg:mt-3 lg:order-2 font-pj">
                  {Intl.NumberFormat("en", { notation: "compact" }).format(
                    keys
                  )}
                </p>
                <h3 className="mt-5 text-sm font-bold tracking-widest text-gray-600 uppercase lg:mt-0 lg:order-1 font-pj">
                  Keys
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Changelog />
      </section>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 font-display sm:leading-tight sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-tight">
              Proudly Open Source
            </h1>

            <p className="mt-8 text-base font-medium text-gray-700 ">
              Our source code is available on GitHub - feel free to review,
              contribute and share with your friends.
            </p>
            <div className="flex items-center justify-center py-10">
              <a
                href="https://github.com/unkeyed/unkey"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center">
                  <div className="flex items-center h-10 p-4 space-x-2 bg-gray-800 border border-gray-600 rounded-md">
                    <Github className="w-5 h-5 text-white" />
                    <p className="font-medium text-white">
                      {Intl.NumberFormat().format(stars.stargazers_count || 0)}{" "}
                      stars
                    </p>
                    <p />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-4 md:px-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <hr className="md:mt-16 border-gray-200" />

          <div className="md:mt-8 sm:flex sm:items-center sm:justify-between">
            <ul className="md:flex items-center hidden justify-start space-x-3 sm:order-2 sm:justify-end">
              <li>
                <Link
                  href="https://github.com/unkeyed/unkey"
                  target="_blank"
                  title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  rel="noopener"
                >
                  <Github className="w-6 h-6" />
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-sm font-normal text-gray-600 font-pj sm:order-1 sm:mt-0">
              © Copyright {new Date().getUTCFullYear()}, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
