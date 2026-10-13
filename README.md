# Aber Islam — AI/ML Engineering Portfolio

Live site: <https://iamaber.github.io/portfolio-website/>

This repository publishes my GitHub Pages portfolio. It highlights production-oriented work in Bangla NLP, retrieval-augmented generation, model fine-tuning, computer vision, and applied machine learning.

## Selected work

| Project | Source | Package, model, or demo |
| --- | --- | --- |
| **banglatok** — fast, lossless Bangla/Banglish tokenizers | [GitHub](https://github.com/iamaber/banglatok) | [PyPI](https://pypi.org/project/banglatok/) · [Hugging Face model](https://huggingface.co/iamaber/banglatok-bn-bpe-58k) · [dataset](https://huggingface.co/datasets/iamaber/banglatok-training-corpus) |
| **Medical Guideline RAG** — medical retrieval and drug-interaction checks | [GitHub](https://github.com/iamaber/medical-guideline-rag) | [Live demo](https://huggingface.co/spaces/iamaber/medical-guideline-rag) |
| **PubMedQA LoRA+** — Mistral-7B fine-tuning and evaluation workflow | [GitHub](https://github.com/iamaber/mistral-7b-instruct-finetune) | Evaluation findings are documented in the repository |
| **Bangla Product RAG** — catalog retrieval with FastAPI and Groq | [GitHub](https://github.com/iamaber/rag-system) | [Live demo](https://huggingface.co/spaces/iamaber/bangla-rag-system) |
| **AI Vision Workspace** — YOLO detection and grounded visual Q&A | [GitHub](https://github.com/iamaber/image-analysis-and-qa) | [Live demo](https://huggingface.co/spaces/iamaber/image-analysis-and-qa-rag) |
| **News Sentiment Dashboard** — RSS analysis with Transformers and Streamlit | [GitHub](https://github.com/iamaber/realtime-news-sentiment) | [Live demo](https://huggingface.co/spaces/iamaber/Real-time-News-Sentiment-Analysis) |

## Run locally

The site is a static `index.html` page:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Links

- [GitHub](https://github.com/iamaber)
- [Hugging Face](https://huggingface.co/iamaber)
- [LinkedIn](https://www.linkedin.com/in/md-aber-islam)