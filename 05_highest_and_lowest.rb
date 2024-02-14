def high_and_low(numbers)
  numbers.split(' ').minmax_by{|x| x.to_i}.reverse.join(" ")
end

puts high_and_low("1 2 3 4 5")   # 5 1
puts high_and_low("1 2 -3 4 5")  # 5 -3
puts high_and_low("1 9 3 4 -5")  # 9 -5