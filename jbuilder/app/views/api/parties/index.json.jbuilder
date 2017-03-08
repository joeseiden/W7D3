json.array! @parties do |party|
  @party = party
  json.partial! 'api/parties/party', party: @party

  json.guests do
    json.array! @party.guests do |guest|
      @guest = guest
      json.partial! 'api/guests/guest', guest: @guest
    end
  end
end
