.PHONY: help
default: help

.PHONY: install
install:
	@npm install

.PHONY: dev
dev:
	@npm run dev

.PHONY: lint
lint:
	@npm run lint

.PHONY: test
test:
	@npm run test

.PHONY: cov
cov:
	@npm run cov

.PHONY: build
build:
	@npm run clean
	@npm run build

.PHONY: docs-dev
docs-dev:
	@npm run docs:dev

.PHONY: docs-build
docs-build:
	@npm run docs:build

help:
	@echo "   \033[35mmake\033[0m \033[1mCommand instructions\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t---  Installation dependence"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t---  Development mod"
	@echo "   \033[35mmake lint\033[0m\t\033[0m\t---  Code lint"
	@echo "   \033[35mmake test\033[0m\t\033[0m\t---  Code test"
	@echo "   \033[35mmake cov\033[0m\t\033[0m\t---  Code cov"
	@echo "   \033[35mmake build\033[0m\t\033[0m\t---  Build code"
	@echo "   \033[35mmake docs-dev\033[0m\033[0m\t---  Write docs"
	@echo "   \033[35mmake docs-build\033[0m\033[0m\t---  Build docs"
