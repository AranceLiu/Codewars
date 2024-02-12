def maskify(cc)
  cc.gsub(/.(?=.{4})/,"#") # Lookahead in regular expression
end

puts maskify("Nananananananananananananananana Batman!")  #  ####################################man!
puts maskify("4556364607935616")  #  ############5616
puts maskify("64607935616")       #  #######5616
puts maskify("11111")             #  #1111
puts maskify("1111")              #  1111
puts maskify("1")                 #  1
puts maskify("")                  #  
puts maskify("A rance")           #  ###ance