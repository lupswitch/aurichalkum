all: makehead.js maketail.js site/*.js
	cat site/*.js > site.t
	rm -f aurichalkum.js
	cat makehead.js site.t maketail.js > aurichalkum.js
	rm *.t

clean:
	rm -f *.t
