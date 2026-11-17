# countdown

Countdown is a Python web application built with FastAPI. It currently exposes
a health endpoint to confirm the service is running.

## Development

This project uses Python 3.14 and [uv](https://docs.astral.sh/uv/).

```sh
uv sync
uv run uvicorn app.main:app --reload
```

Open [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health) to see
the health response. Interactive API documentation is available at
[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Run the tests, linter, and format check with:

```sh
uv run pytest
uv run ruff check .
uv run ruff format --check .
```
