def square_digits num
  num.digits.map {|x| x ** 2}.reverse.join.to_i
end

puts square_digits(9119)        # 911181
puts square_digits(765)         # 493625
puts square_digits(3212)        # 9414
puts square_digits(2112)        # 4114
puts square_digits(1111)        # 1111
puts square_digits(1234321)     # 14916941
puts square_digits(0)           # 0