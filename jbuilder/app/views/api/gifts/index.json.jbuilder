json.array! @gifts do |gift|
  @gift = gift
  json.partial! 'api/gifts/gift', gift: @gift
end
