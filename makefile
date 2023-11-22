include help.mk

run: ##@local Run Services Locally
run:
	@npm run start

init-env: ##@setup Initialize Local Environment by Creating Config Files
init-env:
	@cp .env.example .env

install: ##@setup Install All Dependencies
install:
	@echo "$(BLUE)\n\n\n-> installing dependencies"
	@npm install
	@echo "dependencies installed"

clean: ##@setup Remove Dependencies
clean:
	@echo "$(BLUE)-> cleaning dependencies"
	@rm -Rf node_modules package-lock.json

	@echo "$(RESET)dependencies cleaned"

clean-install: ##@setup Removes and Installs Dependencies
clean-install:
	@make clean
	@make install