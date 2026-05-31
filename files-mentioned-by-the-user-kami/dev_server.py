from __future__ import annotations

import argparse
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class QuietStaticHandler(SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: object) -> None:
        return


class ReusableThreadingHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the Kami to Pen static site locally.")
    parser.add_argument("port", nargs="?", default=4177, type=int)
    parser.add_argument("--bind", default="127.0.0.1")
    parser.add_argument("--directory", default=os.getcwd())
    args = parser.parse_args()

    handler = lambda *handler_args, **handler_kwargs: QuietStaticHandler(
        *handler_args,
        directory=args.directory,
        **handler_kwargs,
    )
    server = ReusableThreadingHTTPServer((args.bind, args.port), handler)
    server.serve_forever()


if __name__ == "__main__":
    main()
