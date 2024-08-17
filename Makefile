SRCS = $(wildcard lib/**)

all: test dist build

.PHONY: clean
clean: node_modules
	pnpm exec tsc -b --clean
	rm -rf dist build

.PHONY: distclean
distclean: clean
	rm -rf node_modules

.PHONY: test
test: node_modules dist
	pnpm exec vitest run
	$(MAKE) smoketest

node_modules: package.json
	pnpm install

dist: node_modules tsconfig.json $(SRCS)
	pnpm exec tsc

.PHONY: dist-watch
dist-watch: node_modules
	pnpm exec tsc -w --preserveWatchOutput

.PHONY: pretty
pretty: node_modules
	pnpm exec eslint --fix . || true
	pnpm exec prettier --write .

.PHONY: dev
dev: dist-watch

.PHONY: smoketest
smoketest: node_modules
	node --input-type=module -e "import '@oyen-oss/diddy-dom'"