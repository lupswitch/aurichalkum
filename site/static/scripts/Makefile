all: makehead.js maketail.js util.t site/*.js
	cat util.t site/*.js > site.t
	rm -f aurichalkum.js
	cat makehead.js site.t maketail.js > aurichalkum.js
	rm *.t

clean:
	rm -f *.t

util.t: site/util/*.js
	cat site/util/*.js > util.t
